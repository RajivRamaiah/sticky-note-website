# Sticky Note Central!!!

This is a cool, easy-to-use sticky note board where you can create new sticky notes, edit them, move them around, and delete them. You can also use markdown when writing your sticky notes so you can embed cool images and GIFs within each note.

To create this, I used React and created an over-arching App component, a Note component, and a Create-Bar component. The App component has an Immutable Map object that holds the notes that have been added to the board. A Note itself is modeled in the note.js and has a title, a few different icons to delete, edit, and move the note, and content that it displays. I made the sticky-note board look prettier and the notes semi-resizable as well, but I am going to implement the Z-Axis extra credit for the next part of the lab.
