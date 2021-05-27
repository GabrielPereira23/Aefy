class Aefy {
  url = null;
  method = null;
  content = null;
  contentString = null;
  ready = false;
  
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
      console.log("Prepared!");
    }
  }

  generateContentString(content) {
    let numOfAtributes = 0;
    let contentString = "";
    for (let key in content) {
      if (typeof content[key] !== "string") {
        this.error(8, "All attributes of the content object must be of type String");
        return false;
      }
      contentString += `${key}=${content[key]}&`;
      numOfAtributes++;
    }
    if (numOfAtributes < 1) {
      this.error(9, "The content object is empty");
      return false;
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