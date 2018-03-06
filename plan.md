lets_vote is a react web app designed to provide comprehensive voting information for any address in the United States

flow is as follows: user enters an address, loading federal, state, and local representative information, along with information about the next election and their nearest voting precinct

all data is loaded from Google Civic Information API  
should set up key-value pairs between offices and the representative(s) that hold those offices

next step is to get address as input, send that to maps and Civic Info API  
will need placeholder info before address is inputted (just set up default)
probably need to make some address class a parent of both reps and voter information

Then get information about upcoming elections (which I think is a different part of the civic info API)

(stretch): if possible, find voting records (probably external link)

I've probably been thinking about this wrong: interesting part is not the google map, but the legislators-map is a nice aside.