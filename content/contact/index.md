---
layout: layouts/base.njk
eleventyNavigation:
  key: Contact Me
  order: 3
---
# Contact <span class="blue blueOpp">Me</span>

<div class="container form col-sm-12">
<br />
<div class="panel-group">
	<div class="panel panel-default">
	<div class="panel">
		<h3 style="padding-left: 11px; padding-top: 10px;">Please <span class="blue blueOpp">enter your</span> details</h3>
	</div>
	<div class="panel-body">
		<form class="was-validated" netlify="">
			<div class="form-group col-md-6">
				<label for="name" class="form-label">First Name:</label>
				<input
				required=""
				type="text"
				id="name"
				class="form-control"
				name="f-name"
				placeholder="Enter First Name"
				/>
			</div>
			<div class="form-group col-md-6">
				<label for="name" class="form-label">Last Name</label>
				<input
				required=""
				type="text"
				id="name"
				class="form-control"
				name="l-name"
				placeholder="Enter Last Name"
				/>
			</div>
			<div class="form-group col-md-12">
				<label for="textarea" class="form-label">Short message</label>
				<input
				required=""
				type="textarea"
				id="name"
				class="form-control"
				name="name"
				placeholder="Message"
				/>
			</div>
			<!-- <div class="checkbox">
				<label class="form-label"
				><input
					type="checkbox"
					id="terms-flag"
					name="terms-flag"
				/>Please accept my Terms and Conditions</label
				>
			</div> -->
			<button type="submit" class="btn btn-default col-md-12">Submit</button>
		</form>
	</div>
	</div>
</div>
</div>
