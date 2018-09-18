# Writing Tests after writing code, lessons learned.

So I got a small amount of time today to spend writing the frame work for this blog, after Fridays post on the point of writing test it seemed logical I ought to start writing some of my own. With the little time I had to write a few tests some practices that become necessary to conduct unit tests, these are.

+ One function per file, since almost every function separating these functions out into individual files helps make the tests easier to write (and hopefully run).
+ More folders, a component will often require a few functions to work as intended, so creating a dedicate folder for the component helps keep the dedicated functions it uses in the same place.
+ Note, this won't always be the case if you're using a library like redux where having a directory dedicated to actions near the top of the folder structure is common practice and helps with reducer logic.

Other tips that I've yet to try out include knowing what the result should look like and writing them out as short statements, which may lead on to more questions like for the frame work this blog is using:
+ Can parse Markdown files into html.
+ Posts are sorted in chronological order.
+ When at the home page I can click on a title and then see the markdown.
  + Should the location / url update?
  + Will the markdown be files which are fetched or bundled in to the client side application.
+ And so on.

I would say hopefully this works, but test exist to take away any speculation ;)
