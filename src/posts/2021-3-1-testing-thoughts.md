# Some thoughts on testing, data science, and collaboration
#### Mar 1, 2021

One of my most-used (and personal favourite) Python packages `pytest` tweeted the question recently:

<center><blockquote class="twitter-tweet"><p lang="en" dir="ltr">What convinced you that writing tests was worthwhile?</p>&mdash; pytest.org (@pytestdotorg) <a href="https://twitter.com/pytestdotorg/status/1365417272219557890?ref_src=twsrc%5Etfw">February 26, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></center> 

The more common responses to this are typically along the lines of:

* Tests enable us to make changes with confidence,
* Tests allow us to verify something new works as expected,
* Tests help us collaborate more effectively.

Most of us will have at least some professional experience that informs our held beliefs and opinions regarding software practice, including those that cover software testing. Speaking personally, my philosophy toward writing tests has been directly informed by a collection of experiences where testing would have saved time and sanity when dealing with a tricky bug, regression, or outage.

Specifically on the last bullet re: collaboration, it took me a little longer than the others for it to click that good testing practice can be an aid for engineering teams work effectively together on the same projects. I'm so convinced of this nowadays that I'd consider it a specific interest in my work as a software engineer.

As a new start, or as an engineer who hasn't worked on a particular project before, one of the first steps towards productivity is often running a checkout locally and ensuring the tests  pass. There's a few tacit things that this achieves:

* It draws a line in the sand from which contributions can begin,
* It (mostly) can ensure consistency across development environments,
* It often enables developers to understand the code quicker.

Well-written tests can communicate what's happening under the hood on some of the more complex aspects of your codebase. Tests *can* be leveraged to resemble documentation, but I've found even simply stepping-through a test example with a debugger can be been the most effective way to understand a particularly tricky area I might be having some difficulty grokking.

A great side effect of all this is in distributing the ownership of code. If there's a decent level of test coverage, I'm much more likely to be able to figure out what's going on and ship changes or fixes as a less experienced contributor. It can help mitigate against individuals being the *go to* for specific parts of the stack.

The good developer experiences I've had working on high quality codebases has led me to think a bit more deeply about areas where these practices might help elsewhere.

I've been working either as or closely with data scientists for the past decade or so, and I'm a firm believer in high quality and testing when working with data-driven components. These are complex bits of kit — even a simple "heuristic" data science feature can be awkward to track regressions with in scenarios where there's multiple contributors and the development pace is quick. That's before we even consider some of the more heavyweight approaches in the machine learning space.


