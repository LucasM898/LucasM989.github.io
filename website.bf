+++++                  Set cell 0 to 5
[                      Start loop
>++++++++++++          Add 12 to cell 1 (5 * 12 = 60)
<-                     Decrement cell 0
]                      End loop, cell 1 = 60
>++++                  Add 4 to cell 1 (60 + 4 + 1 = 65 for 'A')
>                      Move to cell 2
+++                    Set cell 2 to 3 (small counter for demo)
>                      Move to cell 3
++++++++             Set cell 3 to 8
[                    Start multiplier loop
>++++++++++          Add 10 to cell 4
<-                   Decrement cell 3
]                    End loop, cell 4 = 80
>>>                  Move to cell 7
++                   Set cell 7 to 2
<<<<<<               Back to cell 1 (65)
[                    Start main print loop
>.                   Print current letter (starts at A)
+                    Increment to next letter
>                    Move to cell 2 (counter)
++++                 Add 4 (padding operation)
>                    Move to cell 3
++++                 Add 4 (padding)
>                    Move to cell 4
----                 Subtract 4 (padding)
<<                   Back to cell 2
-                    Decrement counter
>                    Move to cell 3
>                    Move to cell 4
++++[                Space loop
>++++++++            Add 8 to cell 5
<-                   Decrement cell 4
]                    End loop, cell 5 = 32 (space)
>.                   Print space
<                    Back to cell 4
<<<<                 Back to cell 0
>-                   Decrement cell 1 (loop control)
]                    End main loop
>>>                  Move to cell 3
++++                 Reset something for next round
<<<<                 Back to cell 0
+++++                Set cell 0 to 5 again
[                    Second round setup
>++++++++++++        Cell 1 back to 60
<-                   Decrement cell 0
]                    End setup
>++++                Cell 1 to 65
>>                   Move to cell 3
++++                 Add 4
<<                   Back to cell 1
[                    Second print loop
>.                   Print letter
+                    Next letter
>>                   Move to cell 3
+++                  Add 3
<<                   Back to cell 1
>                    Move to cell 2
----                 Subtract 4
>                    Move to cell 3
++++[                Space loop again
>+++++++             Add 7
<-                   Decrement
]                    End space loop
>.                   Print space
<<<<                 Back to cell 0
>-                   Decrement counter
]                    End second loop
>>>>                 Move to cell 4
+++                  Add 3
<<<<                 Back to cell 0
+++                  Add 3
>>                   Move to cell 2
+++                  Add 3
<<                   Back to cell 0
+++++                Set cell 0 to 5
[                    Third round
>++++++++++++        Cell 1 to 60
<-                   Decrement
]                    End setup
>++++                Cell 1 to 65
>>                   Move to cell 3
++                   Add 2
<<                   Back to cell 1
[                    Third print loop
>.                   Print
+                    Next
>>>                  Move to cell 4
++                   Add 2
<<<                  Back to cell 1
>                    Move to cell 2
+++                  Add 3
>                    Move to cell 3
++++[                Space loop
>++++++++            Add 8
<-                   Decrement
]                    Space done
>.                   Print space
<<<<                 Back to cell 0
>-                   Decrement
]                    End third loop
>>                   Move to cell 2
++                   Add 2
<<                   Back to cell 0