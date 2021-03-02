---
permalink: 2021-3-1-testing-thoughts.html
---

# Some thoughts on testing, data science, and collaboration
#### Mar 1, 2021

One of my most-used (and personal favourite) Python packages `pytest` tweeted the question recently:

<blockquote class="twitter-tweet tw-align-center"><p lang="en" dir="ltr">What convinced you that writing tests was worthwhile?</p>&mdash; pytest.org (@pytestdotorg) <a href="https://twitter.com/pytestdotorg/status/1365417272219557890?ref_src=twsrc%5Etfw">February 26, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

The more common responses to this are typically along the lines of:

* Tests enable us to make changes with confidence,
* Tests allow us to verify something new works as expected,
* Tests help us collaborate more effectively.

Most of us will have at least some professional experience that informs our held beliefs and opinions regarding software practice, including those that cover software testing. Speaking personally, my philosophy toward writing tests has been directly informed by experiences where testing would have saved time and sanity when dealing with a tricky bug, regression, or outage.

Specifically on the last bullet re: collaboration, I'll admit this wasn't immediately obvious to me when I first started writing code in teams. Nowadays, I'm so convinced of this that I'd consider it a specific interest in my work as an engineer.

### Tests for collaboration

As a new start, or as a developer who hasn't worked on a particular project before, one of the first steps towards productivity is running a checkout locally and ensuring the tests pass. I'll often end up in the test suite fairly soon afterwads having a dig around too. There's a few tacit things that this achieves:

* It draws a line in the sand from which contributions can begin,
* It (mostly) can ensure consistency across development environments,
* It often enables developers to understand the code quicker.

Well-written tests can communicate what's happening under the hood on some of the more complex aspects of your codebase. Tests *can* be leveraged to resemble documentation, but I've found even simply stepping-through a test example with a debugger can be the most effective way to understand a particularly tricky area I might be having some difficulty grokking.

A great side effect of all this is in distributing the ownership of code. If there's a decent level of test coverage, I'm much more likely to be able to figure out what's going on and ship changes or fixes quicker as a less experienced contributor. This helps mitigate against individuals being the *go-to* for specific parts of the stack: a scenario that can grind progress to a halt.

The good developer experiences I've had working on high quality codebases has led me to think a bit more deeply about areas where these practices might help elsewhere.

### Testing and data science features

I've been working either as or closely with data scientists for the past decade or so, and I'm a firm believer in high quality and testing when working with data-driven components. These are complex bits of kit — even a simple "heuristic" data science feature can be awkward to track regressions with in scenarios where there are multiple contributors and the development pace is quick. That's before we even consider some of the more heavyweight approaches in the machine learning space.

The train-test cycle is already central to the process of constructing models and algorithms, but what about after this point? What's going on when we take the approach from the workbench of a Jupyter Notebook, and integrate it into a production context?

There's some great material out there regarding tests and data science — from [writing unit tests](https://www.youtube.com/watch?v=Da-FL_1i6ps) as a first class contributions, to [integrating testing practice](http://www.tdda.info/) right from the get-go in your data analysis workflow. It's a rapidly maturing area that we're all learning in — another excellent example of this can be seen in the broader move towards best practices with communities like [MLOps](https://mlops.community/).

I'm interested in how we can begin to build tests when shipping data-driven components that help with collaboration in teams — **especially** in those scenarios where not every contributor is necessarily a data science expert. Being able to demonstrate fitness and validation on each phase of a continuous integration pipeline, on each local build, or after each boilerplate or model-specific change is something that allows developers to remain confident dealing with these components.

### Introducing Hypervector

Constructing tests for a function or feature that relies on the empirical aspects of the data science development process can become a little more tricky than writing assertions elsewhere. Take a feature vector of `N` values — there's a multiplicity of valid input combinations that could be encountered. Generating, managing, and sharing test data for these across different contexts is often a cumbersome process.

With this in mind, I'm currently focused on building tools that help this process with [Hypervector](https://hypervector.io) — a testing and validation API specifically for generating data-driven tests to maintain confidence and improve observability for your data-driven features.

<p style="text-align: center">
<a href="https://hypervector.io">
<img src="/blog/tests/hypervector.png" width="30%">
</a>
</p>

Hypervector allows you to:

* Build Ensembles of data-driven test cases,
* Retrieve test data via a canonical endpoint wherever it's required,
* Define Benchmarks of expected behaviour,
* Assert results are consistent, or flag diffs for investigation

all via the API directly, or with the `hypervector-wrapper` Python package.

```json
# definition.json
# Builds two dimensional feature vector of int and float types,
# distributed across cases as uniform and Gaussian dists respectively        
        
{
  "definition_name": "Example Definition",
  "features": [
    {
      "feature_name": "feature_A",
      "type": "INTEGER",
      "distribution": {
        "type": "UNIFORM",
        "min": 10,
        "max": 50
      }
    },
    {
      "feature_name": "feature_B",
      "type": "FLOAT",
      "distribution": {
        "type": "GAUSSIAN",
        "mu": 15.0,
        "sigma": 2.5
      }
    }
  ]
}
```

```python
# set_up.py
# Run once to define test data and benchmark for fn_under_test

from data_service import fn_under_test
import hypervector
hypervector.API_KEY = "..."

project = hypervector.Project.new()
definition = hypervector.Definition.new(
    definition="./definition.json",
    project_uuid=project.project_uuid
)

# generating test data
ensemble = hypervector.Ensemble.new(
    definition_uuid=definition.definition_uuid,
    size=5000  # 5k samples
)
test_cases = hypervector.Ensemble.get(ensemble.ensemble_uuid).hypervectors

results = []
for test_case in test_cases:
    result = fn_under_test(test_case)
    results.append(result)

# define snapshot of expected behavour    
hypervector.Benchmark.new(
    ensemble_uuid=ensemble.ensemble_uuid, 
    output=results
)
```

```python
# test_fn_under_test.py
# Run as part of every subsequent test suite

from data_service import fn_under_test
import hypervector
hypervector.API_KEY = "..."

# get test data
tests = hypervector.Ensemble.get(ensemble.ensemble_uuid)

results = []
for test_case in tests.hypervectors:
    result = fn_under_test(test_case)
    results.append(result)

# assert all 5k results are consistent with Benchmark
benchmark_result = tests.benchmarks[0].assert_equal(results)
assert benchmark_result.asserted is True
```

I'm really keen to speak to any engineers or data scientists who are interested in this area, and who might want to be an early adopter for our forthcoming alpha programme. Please feel free to get in touch via [hello@hypervector.io](mailto:hello@hypervector.io), or ping me on Twitter [@jsnctl](https://twitter.com/jsnctl)

