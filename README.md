# gatsby-source-ossn
attempt to prepare nodes for OSSN by creating a gatsby-plugin
For this example the club entity is used. 

State: Not functinal.
reason: The remote endpoint does not return a JSON response.
Help needed: Absolutely O:) 

This is an attempt for a gatsby-source-plugin

Target: 
- Create a node that has images as file fields in order for the gatsby-image to run against them.

Plan B
- Download image files so the gatsby image can find them.

Steps: 
 - Fetch data from a graphQL end-point.
 - Create a new node for every club.
 - Make the `imageUrl` a `remotefile` (see [gatsby-source-filesystem](https://www.gatsbyjs.org/packages/gatsby-source-filesystem/#createremotefilenode))
 - Connect the remote file to the Club node.
 
Plan B 
 - Fetch data from a graphQL end-point.
 - Create a new node for every club.
 - download the image file
 - Make a field at the club to indicate what file should contain it's image.
 
 
