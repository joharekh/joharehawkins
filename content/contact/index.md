---
layout: layouts/base.njk
eleventyNavigation:
  key: Contact Me
  order: 3
---
			<div class="container-fluid">
				<div class="row">
				  <div class="col-sm-6">
					<p><div class="container form"><br>
						<div class="panel-group"><br>
						<div class="panel panel-default"><br>
						<div class="panel"><h3 style="padding-left: 11px;">Please enter your details</h3></div><br>
						<div class="panel-body"><br>
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
						</div></p>
						<p><div class="checkbox">
						<label class="form-label"><input type='checkbox' id="terms-flag" name='terms-flag'>Please accept my Terms and Conditions</label>
						</div></p>
						<p><button type="submit" class="btn btn-default">Submit</button>
						</form></p>
				  </div>
				  <div class="col-sm-6">
					<img src="./img/portrait.svg">
				  </div>
				</div>
			  </div>					

