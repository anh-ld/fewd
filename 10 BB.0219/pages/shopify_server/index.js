const dotenv = require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const crypto = require('crypto');
const cookie = require('cookie');
const nonce = require('nonce')();
const querystring = require('querystring');
const request = require('request-promise');

const apiKey = process.env.SHOPIFY_API_KEY;
const apiSecret = process.env.SHOPIFY_API_SECRET;
const scopes = 'read_content, write_content';
const forwardingAddress = "https://ebe60f0e.ngrok.io";

const path = require("path");
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let shop, accessToken;

// assigning for testing purpose at localhost
shop = "pizza170.myshopify.com" 
accessToken = "3aa5f1e72482c0b588717e709296889f";

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

// Shopify auth
app.get('/shopify', (req, res) => {
  shop = req.query.shop;
  if (shop) {
    const state = nonce();
    const redirectUri = forwardingAddress + '/shopify/callback';
    const installUrl = 'https://' + shop +
      '/admin/oauth/authorize?client_id=' + apiKey +
      '&scope=' + scopes +
      '&state=' + state +
      '&redirect_uri=' + redirectUri;

    res.cookie('state', state);
    res.redirect(installUrl);
  } else {
    return res.status(400).send('Missing shop parameter. Please add ?shop=your-development-shop.myshopify.com to your request');
  }
});

app.get('/shopify/callback', (req, res) => {
  const { shop, hmac, code, state } = req.query;
  const stateCookie = cookie.parse(req.headers.cookie).state;

  if (state !== stateCookie) {
    return res.status(403).send('Request origin cannot be verified');
  }

  if (shop && hmac && code) {
    // DONE: Validate request is from Shopify
    const map = Object.assign({}, req.query);
    delete map['signature'];
    delete map['hmac'];
    const message = querystring.stringify(map);
    const providedHmac = Buffer.from(hmac, 'utf-8');
    const generatedHash = Buffer.from(
      crypto
        .createHmac('sha256', apiSecret)
        .update(message)
        .digest('hex'),
        'utf-8'
      );
    let hashEquals = false;

    try {
      hashEquals = crypto.timingSafeEqual(generatedHash, providedHmac)
    } catch (e) {
      hashEquals = false;
    };

    if (!hashEquals) {
      return res.status(400).send('HMAC validation failed');
    }

    // DONE: Exchange temporary code for a permanent access token
    const accessTokenRequestUrl = 'https://' + shop + '/admin/oauth/access_token';
    const accessTokenPayload = {
      client_id: apiKey,
      client_secret: apiSecret,
      code,
    };

    request.post(accessTokenRequestUrl, { json: accessTokenPayload })
    .then((accessTokenResponse) => {
      accessToken = accessTokenResponse.access_token;
      res.redirect('/');
    })
    .catch((error) => {
      res.status(error.statusCode).send(error.error.error_description);
    });

  } else {
    res.status(400).send('Required parameters missing');
  }
});

app.get('/api/pages', (req, res) => {
	const shopRequestHeaders = {
    'X-Shopify-Access-Token': accessToken,
  };
  const shopRequestUrl = 'https://' + shop + '/admin/pages.json';
  request.get(shopRequestUrl, { headers: shopRequestHeaders })
	  .then((shopResponse) => {
	    res.status(200).send(shopResponse);
	  })
	  .catch((error) => {
	    res.status(error.statusCode).send(error.error.error_description);
	  });
})

app.get('/api/pages/:id', (req, res) => {
	const shopRequestHeaders = {
    'X-Shopify-Access-Token': accessToken,
  };
  const shopRequestUrl = 'https://' + shop + '/admin/pages/' + req.params.id +'.json';
  request.get(shopRequestUrl, { headers: shopRequestHeaders })
	  .then((shopResponse) => {
	    res.status(200).send(shopResponse);
	  })
	  .catch((error) => {
	    res.status(error.statusCode).send(error.error.error_description);
	  });
})

app.post('/api/pages', (req, res) => {
	const shopRequestHeaders = {
	   'X-Shopify-Access-Token': accessToken
	};
	const shopRequestUrl = 'https://' + shop + '/admin/pages.json';
	const options = {
	  method: 'POST',
	  uri: shopRequestUrl,
	  headers: shopRequestHeaders,
	  body: req.body,
	  json: true 
	};
	request(options)
		.then((shopResponse) => {
	    res.status(200).send(shopResponse);
	  })
	  .catch((error) => {
	    res.status(error.statusCode).send(error.error.error_description);
	  });
})

app.put('/api/pages/:id', (req, res) => {
	const shopRequestHeaders = {
	   'X-Shopify-Access-Token': accessToken
	};
	const shopRequestUrl = 'https://' + shop + '/admin/pages/' + req.params.id +'.json';
	const options = {
	  method: 'PUT',
	  uri: shopRequestUrl,
	  headers: shopRequestHeaders,
	  body: req.body,
	  json: true 
	};
	request(options)
		.then((shopResponse) => {
	    res.status(200).send(shopResponse);
	  })
	  .catch((error) => {
	    res.status(error.statusCode).send(error.error.error_description);
	  });
})

app.delete('/api/pages/:id', (req, res) => {
	const shopRequestHeaders = {
	   'X-Shopify-Access-Token': accessToken
	};
	const shopRequestUrl = 'https://' + shop + '/admin/pages/' + req.params.id +'.json';
	const options = {
	  method: 'DELETE',
	  uri: shopRequestUrl,
	  headers: shopRequestHeaders
	};
	request(options)
		.then((shopResponse) => {
	    res.status(200).send(shopResponse);
	  })
	  .catch((error) => {
	    res.status(error.statusCode).send(error.error.error_description);
	  });
})

app.listen(3000, () => {
  console.log('App is listening on port 3000!');
});