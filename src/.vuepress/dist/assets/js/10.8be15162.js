(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{358:function(e,t,a){"use strict";a.r(t);var r=a(39),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"ryder-cup-2018-us-wildcards-from-the-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ryder-cup-2018-us-wildcards-from-the-data"}},[e._v("#")]),e._v(" Ryder Cup 2018 - US wildcards (from the data)")]),e._v(" "),a("h4",{attrs:{id:"aug-30-2018"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aug-30-2018"}},[e._v("#")]),e._v(" Aug 30, 2018")]),e._v(" "),a("p",[e._v("With the 2018 Ryder Cup fast approaching, there’s a lot of speculation about the team composition for both sides. Automatic qualification has the following players already making the trip to Le Golf National:")]),e._v(" "),a("center",[a("img",{attrs:{src:"/blog/rydercup/teams.png",width:"80%"}})]),e._v(" "),a("p",[a("em",[e._v("Rankings accurate as of August 30th 2018, ahead of the Dell Technologies C’ship & Made in Denmark")])]),e._v(" "),a("p",[e._v("Team Europe still have a few potentials who can join on points for the last spot, with the Made in Denmark event being an opportunity for Thorbjorn Olesen, Matt Fitzpatrick and Eddie Pepperell to claim the 8th jersey.")]),e._v(" "),a("p",[e._v("The US, however, already have their eight guys locked in. All that remains is for Jim Furyk to select his four wildcard picks to complete the team. Everybody has their own take on which guys should be given the nod, and what qualities they possess which make them an ideal selection. Experience and character are both typical considerations when making selections, and the golfing media already have earmarked some marquee players that they believe should be on Furyk’s teamsheet.")]),e._v(" "),a("p",[e._v("It can’t be easy making decisions like this with so many opinions being broadcast. What does the data tell us? We’ll have a deeper look at the form of the top US non-automatics (beyond just the RC points) in this blog post, using a couple of different metrics.")]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("(All Python code available at "),a("a",{attrs:{href:"%5Bhttps://github.com/jsnctl/rydercup2018"}},[e._v("https://github.com/jsnctl/rydercup2018")]),e._v(")")]),e._v(" "),a("p",[e._v("An interesting place to start is by looking at the finishes each week on the PGA Tour this season for US players. If we grab all the final positions for each player that have made at least 10 cuts so far, we can get a crude estimate of their form each week against the field.")]),e._v(" "),a("center",[a("img",{attrs:{src:"/blog/rydercup/lb1.png",width:"80%"}})]),e._v(" "),a("p",[a("em",[e._v("Weekly rank in 2018 for US players making 10 cuts in the regular season (through Northern Trust)")])]),e._v(" "),a("p",[e._v("The above illustration encapsulates all that weekly ranking data for each player: white space corresponds to either a missed cut or a skipped event, more blue means a poorer finish whereas more red shows a good result, with the deepest red indicating a win. If we calculate the average rank per week, sort the players by this value and look at the top performers, things get a little clearer:")]),e._v(" "),a("center",[a("img",{attrs:{src:"/blog/rydercup/lb2.png",width:"80%"}})]),e._v(" "),a("p",[a("em",[e._v("Top 20 US players by mean weekly rank (through Northern Trust)")])]),e._v(" "),a("p",[e._v("No big surprises with the best-in-class here, world no.1 Dustin Johnson comes out ahead of the pack with a pretty exceptional mean rank of ~6th. He’s the only player who has an average final position in the top 10 for this season.")]),e._v(" "),a("p",[e._v("The rest of the US auto-qualifiers do pretty well too: everybody is here in the top 20 with the exception of Bubba Watson, who has an average weekly rank ~36th. This is probably down to Bubba’s win at the Dell Technologies Matchplay not being counted in this analysis (sorry Bubba, at least that’s relevant to the Ryder Cup).")]),e._v(" "),a("p",[e._v("The notables from the non-qualifiers are (by mean rank): Tiger Woods (12.07), Patrick Cantlay (12.88), Tony Finau (12.9), Phil Mickelson (13.94) and Bryson DeChambeau (14.95). Tiger’s return is made all the more impressive by this result, averaging well inside a top 15 every time he’s teed it up this season. Along with Phil, you have to expect these guys will be the first two picks for Furyk: all their experience coupled with a good 2018 for both will be invaluable.")]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("For the remaining two slots, let’s continue to look at the front-runners from the analysis so far: Finau, DeChambeau and Cantlay. Since the mean weekly finish doesn’t consider ties or the relative gap in strokes between final positions, let’s look at a different metric to find out some more: relative strokes to the eventual winner. This is a decent approximation of how well the player performed relative to the best player that week.")]),e._v(" "),a("p",[e._v("This is calculated by taking the difference between a player’s four round total and the total of the eventual winner of the event: note that winning an event results in a relative strokes of 0, which is the ideal value.")]),e._v(" "),a("center",[a("img",{attrs:{src:"/blog/rydercup/deltas.png",width:"80%"}})]),e._v(" "),a("p",[a("em",[e._v("Histograms of relative strokes from winner for Finau, DeChambeau & Cantlay, with average relative strokes annotated")])]),e._v(" "),a("p",[e._v("Finau has the lowest average of this measure of the 3, but doesn’t have any wins vs. DeChambeau and Cantlay’s 2 and 1 respectively this season. To put this into perspective, only Dustin Johnson and Justin Thomas come out better than Finau on relative strokes, with +5.31 and +7.33 respectively. Also worth noting that Cantlay is ranked 5th and DeChambeau 9th among the US players on relative strokes.")]),e._v(" "),a("p",[e._v("These three guys are clearly playing well this season, and each of them has a strong case to be a part of the squad. But there’s only two spots remaining.")]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("There’s an enormous volume of statistics and metrics available to quantify golf performance, including specifics of the player’s game. Perhaps we need to start looking at these individual attributes to identify the best two guys for the job. The PGA Tour track everything from driving distance, to strokes gained from approach, to bouncebackability — there’s almost too much to choose from to make a decisive choice. To address this, we construct something known as a feature vector for each player consisting of the following key performance measures (with the intention of covering as many pillars of ‘good play’ as possible):")]),e._v(" "),a("ul",[a("li",[e._v("Strokes gained: off tee, approach, around the green, putting, tee-to-green, total")]),e._v(" "),a("li",[e._v("Driving: distance, accuracy")]),e._v(" "),a("li",[e._v("Percentages: greens in regulation, sand saves")]),e._v(" "),a("li",[e._v("Averages: eagles (holes per), birdie, scoring")])]),e._v(" "),a("p",[e._v("This 13-component vector acts as a performance signature for every player. Using this, we can then begin to directly compare players, measure similarities and cluster similar playing styles together.")]),e._v(" "),a("p",[e._v("Here’s an example of Dustin Johnson’s features prior to processing:")]),e._v(" "),a("center",[a("img",{attrs:{src:"/blog/rydercup/dj.png",width:"50%"}})]),e._v(" "),a("p",[a("em",[e._v("Pre-scaling feature vector for Dustin Johnson")])]),e._v(" "),a("p",[e._v("Each of these are scaled relative to the rest of the active players on tour (not just the Americans, as was the case with the previous analyses) in order to make them directly comparable in a global feature space. All this consists of is range normalising the values by subtracting the mean and dividing by the standard deviation from each column.")]),e._v(" "),a("p",[e._v("This creates a less manually interpretable but more statistically robust signature for each player, which allows us to measure distances between each of the features for two given players e.g. who is most alike DJ in driving and putting? There’s a few ways of computing distances in feature space, but we use a technique called "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Cosine_similarity",target:"_blank",rel:"noopener noreferrer"}},[e._v("cosine similarity"),a("OutboundLink")],1),e._v(" to measure how alike two players are. This provides a value in the range [1, -1], with 1 being the maximum similarity and -1 being completely unalike.")]),e._v(" "),a("p",[e._v("If we assume the auto-qualified team members represent the ideal qualities of a US Ryder Cup player, we can build a combination of them by taking the average of their post-processed feature vectors. This acts as a sort of ‘centre of gravity’ for the eight players in the team already, and is an anchor point in the feature vector space around which the team exists. We can have a look at who’s feature vector is most similar to this.")]),e._v(" "),a("center",[a("img",{attrs:{src:"/blog/rydercup/overview.png",width:"90%"}})]),e._v(" "),a("p",[e._v("So which of the three candidates is most similar to this ‘ideal US Ryder Cup player’ or ‘US team anchor’? Calculating the cosine similarity across all the non-qualified US players:")]),e._v(" "),a("center",[a("img",{attrs:{src:"/blog/rydercup/results.png",width:"30%"}})]),e._v(" "),a("p",[e._v("DeChambeau, Cantlay and Finau are all still on top! This is probably unsurprising as good tournament results are built on good play, but note that our feature vector representation doesn’t consider tournament position or strokes to the winner in the same manner as the first two metrics (though strokes gained is definitely related).")]),e._v(" "),a("p",[e._v("From this result, we can conclude that Bryson is statistically the most alike of the non-qualifiers to the auto-qualifiers, and that from the data he’d be a superb addition to the team (no surprises there).")]),e._v(" "),a("p",[e._v("As for Finau vs. Cantlay, that’s a really tough choice. The momentum is probably with Finau with more recent results and in higher profile tour events, but as we’ve seen here Cantlay does have the figures to back it up (and actually out-performs Tony in some aspects).")]),e._v(" "),a("p",[e._v("Best of luck to Jim Furyk with his selections, and to the US. Let’s go Europe!")]),e._v(" "),a("p",[e._v("(Originally "),a("a",{attrs:{href:"https://towardsdatascience.com/ryder-cup-2018-us-wildcards-from-the-data-d53d5e0c843f",target:"_blank",rel:"noopener noreferrer"}},[e._v("published on Medium"),a("OutboundLink")],1),e._v(" 30-08-2018)")]),e._v(" "),a("p",[a("strong",[e._v("Acknowledgements")])]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.pgatour.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("PGA Tour"),a("OutboundLink")],1),e._v(" for all data & player images")]),e._v(" "),a("li",[e._v("Inspiration from "),a("a",{attrs:{href:"https://github.com/jacoduplessis/golf",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/jacoduplessis/golf"),a("OutboundLink")],1),e._v("’s Go PGA Tour API wrapper")]),e._v(" "),a("li",[e._v("Thanks to "),a("a",{attrs:{href:"https://towardsdatascience.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Towards Data Science"),a("OutboundLink")],1),e._v(" for re-publishing the original Medium blog post")])])],1)}),[],!1,null,null,null);t.default=o.exports}}]);