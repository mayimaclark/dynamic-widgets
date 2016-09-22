# dynamic-widgets
This is JavaScript application that allows users to enter strings into a variable number of input widgets and sort them.

As a string is entered by the user, its length is automatically displayed next to the input wiget. Buttons are provided to control the interface and provide some functionality. The first button adds another input wiget. The second button will remove an input widget but always leave at least one left. The last button will cause all visible strings to be sorted. Please note, when input widgets are deleted, they are only -not visible-. When the add widget button is used again, any deleted or hidden widgets will show first, before a completely new one is added. When the sort widgets button is used, only visible strings are sorted. The saved strings do not participate in the sort operation if not visible.
