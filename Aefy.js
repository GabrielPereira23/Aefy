class Aefy {
  url = null;
  method = null;
  contentString = null;
  ready = false;
  ajax = new XMLHttpRequest();
  
  error(code, message) {
    this.reset();
    console.error(`AEFY - Error ${code}, ${message}`);
  }

  reset() {
    this.url = null;
    this.method = null;
    this.content = null;
    this.contentString = null;
    this.ready = false;
  }

  prepare(url, method, content) {
    if (this.validation(url, method, content) && this.generateContentString(content)) {
      this.url = url;
      this.method = method.toUpperCase();
      this.ready = true;
      if (this.method === "GET") {
        this.ajax.open("GET", `${this.url}?${this.contentString}`, true);
      } else {
        this.ajax.open("POST", this.url, true);
        this.ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      }
    }
  }

  request(callback) {
    if (!this.ready) {
      this.error(9 ,'Something is wrong, check the parameters you passed in the "prepare" method');
      return;
    } 
    if (this.method === "GET") {
      this.ajax.send();
    } else {
      this.ajax.send(this.contentString);
    }
    this.ajax.onreadystatechange = () => {
      if (this.ajax.readyState === 4 && this.ajax.status === 200) {
        callback(this.ajax.responseText);
      }
    }
  }

  generateContentString(content) {
    let contentString = "";
    for (let key in content) {
      if (typeof content[key] !== "string") {
        this.error(8, "All attributes of the content object must be of type String");
        return false;
      }
      contentString += `${key}=${content[key]}&`;
    }
    contentString = contentString.slice(0, contentString.length - 1);
    this.contentString = contentString;
    return true;
  }

  validation(url, method, content) {
    if (!url) {
      this.error(1, "Request url not defined");
      return false;
    }
    if (!method) {
      this.error(2, "Request method not defined");
      return false;
    }
    if (!content) {
      this.error(3, "Request content not defined");
      return false;
    }
    if (typeof url !== "string") {
      this.error(4, "The url must be a String");
      return false;
    }
    if (typeof method !== "string") {
      this.error(5, "The method must be a String");
      return false;
    }
    if (typeof content !== "object") {
      this.error(6, "The content must be a Object");
      return false;
    }
    method = method.toUpperCase();
    if (method !== "GET" && method !== "POST") {
      this.error(7, 'The method must be "POST" or "GET"');
      return false;
    }
    return true;
  }
}