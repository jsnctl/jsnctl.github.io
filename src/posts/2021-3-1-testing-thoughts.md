# Some thoughts on testing, data, and collaboration
#### Mar 1, 2021

One of my most-used (and personal favourite) Python packages `pytest` tweeted the question recently:

<center><blockquote class="twitter-tweet"><p lang="en" dir="ltr">What convinced you that writing tests was worthwhile?</p>&mdash; pytest.org (@pytestdotorg) <a href="https://twitter.com/pytestdotorg/status/1365417272219557890?ref_src=twsrc%5Etfw">February 26, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></center> 

The most common responses to this are typically something like:

* Tests enable us to make changes with confidence,
* Tests allow us to verify something new works as expected,
* Tests help us collaborate more effectively.

Most of us will have at least some professional experience that informs our held beliefs and opinions regarding software practice, including those that cover software testing. Speaking personally, my philosophy toward writing tests has been directly informed by a collection of experiences where testing would have saved time and sanity when dealing with a tricky bug or outage.

Specifically on the last bullet, it took a little longer for it to click for me that good testing practice can be a vital component in helping engineering teams work effectively together on the same projects.

<img src="/blog/tests/tests.png">

As a new start, or as an engineer who hasn't worked on a particular project before, one of the first steps towards productivity is often running something locally and ensuring the tests  pass. There's a few tacit things that this achieves:

* It draws a line in the sand from which contributions can begin,
* It (mostly) can ensure consistency across development environments,
* It allows developers to understand things better.

Well written tests will often communicate what's happening under the hood on some of the more complex aspects of your codebase. Tests can be leveraged to resemble documentation, but I've found even simply stepping-through a test example with a debugger can be been the most effective way for me to understand something I might be having some difficulty grokking.

Let's face it: there's a bit of a disparity between testing in software more broadly, and testing in the more data-intensive development areas (like data engineering, data science, and specific techniques such as machine learning). With the collaborative benefits of testing in mind, we're missing out.
