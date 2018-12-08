function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// GET request
easyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);
  this.http.onload = function() {
    if (this.status == 200) {
      callback(this.response);
    } else {
      callback("Error: " + this.status);
    }
  }
  this.http.send();
}

// POST request
easyHTTP.prototype.post = function(url, data, callback) {
  this.http.open("POST", url, true);
  this.http.setRequestHeader('Content-type','application/json');
  this.http.onload = function() {
    callback(this.response);
  }

  this.http.send(JSON.stringify(data));
}

// PUT request
easyHTTP.prototype.put = function(url, data, callback) {
  this.http.open("PUT", url, true);
  this.http.setRequestHeader('Content-type','application/json');
  this.http.onload = function() {
    callback(this.response);
  }

  this.http.send(JSON.stringify(data));
}

// DELETE request
easyHTTP.prototype.delete = function(url, callback) {
  this.http.open('DELETE', url, true);
  this.http.onload = function() {
    if (this.status == 200) {
      callback(this.response + " Deleted");
    } else {
      callback("Error: " + this.status);
    }
  }
  this.http.send();
}
