# Lab 8 - Starter

Name: Sky Hung
PID: A15909216

1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.
   1. Within a Github action that runs whenever code is pushed 
   2. Manually run them locally before pushing code
   3. Run them all after all development is completed

    Within a Github action that runs whenever code is pushed. By doing so, developers could compile, build, and publish codes more efficiently.

2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)

    No

3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
   
   No. Unit tests are usually implemented for a small scale of code and a limited functionality. In this case, "message" is a large feature involving interaction between write and send functionalities. Unit tests are usually incapable of testing interaction bwtween different features and components. Therefore, I would not use a unit test for "message" feature.

4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
   
   Yes. Compared to "message" in the previous question, the "max message length" feature is much smaller in scale and does not involve interaction with another feature. It is much simpler and would be suitable for unit test.