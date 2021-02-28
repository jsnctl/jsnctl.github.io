# Some thoughts on testing and collaboration
#### Mar 1, 2021

One of my most-used (and personal favourite) Python packages `pytest` tweeted the question recently:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">What convinced you that writing tests was worthwhile?</p>&mdash; pytest.org (@pytestdotorg) <a href="https://twitter.com/pytestdotorg/status/1365417272219557890?ref_src=twsrc%5Etfw">February 26, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

My initial thinking & response was pretty standard:

* Tests enable us to make changes with confidence,
* Tests allow us to verify something new works,
* Tests ensure we have equivalence across environments and deployments

I've had the opportunity to work with some brilliant engineers in a variety of domains and with different technologies, and one of the near universal things I've encountered is a commitment to at least minimum viable testing. Each of us probably have more than a few war stories about poor coverage, legacy code, or inheriting a service that somehow ended up in production without tests.

