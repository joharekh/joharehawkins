---
layout: layouts/base.njk
eleventyNavigation:
  key: Contact Me
  order: 3
---
      <div class="container form">  
        <div class="panel-group">  
          <div class="panel panel-default">  
            <div class="panel"><h3 style="padding-left: 11px;">Please enter your details</h3></div><br>
            <div class="panel-body">  
              <form class ="was-validated" netlify>
                  <div class="form-group">
                    <label for="name" class="form-label">First Name:</label>
                    <input required type='text' id="name" class="form-control" name='f-name' placeholder='Enter First Name' >
                  </div>
                  <div class="form-group">
                    <label for="name" class="form-label">Last Name</label>
                    <input required type='text' id="name" class="form-control" name='l-name' placeholder='Enter Last Name' >
                  </div>
                  <div class="form-group">
                    <label for="textarea" class="form-label">Message</label>
                    <input required type='textarea' id="name" class="form-control" name='name' placeholder='Message' >
                  </div>

                  <div class="checkbox">
                    <label class="form-label"><input type='checkbox' id="terms-flag" name='terms-flag'>Please accept my Terms and Conditions</label> 
                  </div>

                    <button type="submit" class="btn btn-default">Submit</button>
              </form>
