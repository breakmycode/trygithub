/*
cb web development online 
(node.js   extra topics )

lecture taken from 
link:


==>to setup git and vs code simultaneouyly visit   "https://blogs.msdn.microsoft.com/benjaminperkins/2017/04/04/setting-up-and-using-github-in-visual-studio-2017/"


 STATEMENT -- Github is a version control system 

 Ques- Why we say that Github is a version control system? 
                        ANSWER (with all relevant reasons)
 --> services like google drive or dropbox  where some 2 or 3 people can do a work in a group ,,   
 -->where we canb edit and do changes,,, 
 ==> last time qa edit hue the etc ... that is basicaly the functionality of github 
 -->   we can even see the history 
 --> Also if we have the  bug 
 --> like if the version is being updated  so the new developer needs to see the source code of the previous versiuon to generate new version of that partiucular software so that bugs could be improved.

        SYNCHRONIZATION
== share files and stay up to date .
== keep up with the multiple developers at the same time.

            UNDO(7.33 mins)
== if  u made a mistake a long time ago , jump back and fix it.

            HISTORY
== tracking history is most imp thing 

        SANDBOXING
== Like if we play GTA san andreas , they replicate us into some real world , so those are known as sandbox games.
== if you want to make a radical change to your code base, just cretae another branch

(here it is till 10.48 mins)



            What is Git?
apart from there are amny more f
svn
mercurial
perforce
darks 
bitkeeper
..  

Q- What does Git do differently?

            ANSwer:
 ==git is a distributed version control system..
 == it was created in 2005 by Linus Torvald for development in linux.
== linux developers thoght that Bitkeeper was not keeping it up , so they prefered Git and thats how Git started emerging from 2005 

== Linus cretaed Git himself
== main focus of git -- merging changes 
-- git has a differenr alogorithm to cretae merging and counting various lines 
-- even company like microsoft who have their own version control systems have also now started using git.




Q- How does Git Works?
 
Repositories!
-- like if we are  working in a project and we have Frontend, Backend so 
what should be like -- our frontend being a different GIT repository ? do our backend be a different GIT repository ??
 == can front and back in same ?>
 
 == basically , each Git repository is a unit 

 -- so jis bhi folder k changes ko aap individually track karna chaho without any relation to other folder, make that as GIT REPOSITORY
 
== "git init" command se GIT repository enable ho jaati hai 



Ques-- How to Use Git?

answer==

== journey starts in 2 ways

== one way -- to clone other Git repo
== other way -- to make our own   we use "Git init"

    HISTORY OF THE WORLD , PART 1
== to see the history of any repository , you see log of it 
"git log" (pls see the image named 'logim')
 
==> there we will se commit .. commit means what are the changes that we made in the previous respository 

===> now lets see one different repo: see image("log2im")




        COMMIT 
--> take an example (see image 'commit1im')
  explanation of example : 
  take a file , 2-3 lines written 
  on day 2 , we wrirte some more new lines(green colour lines are new )
  day 3 - we have thsese days line add  here .. here we delete 
  -- now the differenerce between these lines is shown by black colour..


  so, commit is actually exactly the entity called commit1 , commit2
--> git can track changes and notice changes along sub AND sub folder..





            BRANCHES (27.11)
let us take our previous example (see pic- branch1im)

repository on our different days 
== now there are different bugs repoirted on this version and people are reporting to it.
== on the samae point of time add some new features on your code 
,,, after changes say it version 1 and 2 ...
-- now  we need to fix those bug fixes not only in this version but also on the upcoming versions...
-- we merge them on these bug fixes and make a chaion

so branches make us work on 2 different thiungs and merge  them ..
 


 --==> TO SEE THE CURRENT BRANCH YOU ARE USING 
 COMMAND IS "git branch"-- it creates a new branch 


 COMMAND "git checkout foobar" to chaange a current branch
 here foobar is the name of branch in this case  




we can add features an bug fixes in a node


            MERGING:
BRANCHING AND MERGING::--

Sometime we say  have a team , which have been divided iunto two small teams 
one team is working on new features and other is working on bug fixes..
if they code together on the same , they may hav conflicts , so we can 2 branches and later merge those changes tigether .



                THE DOWNFALL OF MAGICALMERGE 
==sometimes bug fixes and features may have same changes
 in differenet parts of the file .

(SEE IMAGE magicim1)-- this is easy to merge


q





                        STASH TO RECUE 

we will study later 



HOW TO INSTAL GIT>


== website is http://git-scm.com , now latest is 2.14.2
== for ubuntu :
sudo apt-get install git 
== for mac :
brew install git   OR xcode select install 


== for windows , use git cmd



question -- How to exit VIM text editor after opening "git commit"

ans  : type in the place of insert ":wq"   which means write and quit 
else do 
git commit -m "commit name here"

then again "git status"
we will see this message 
==>   1 file changed, 1 insertion(+)
 create mode 100644 file01.js

 ==> if any author error occurs , we need to type the following :
 COMMAND -->git config --global user.name "name of github"
         --> git config --global user.email "your email"

==by  these two commands every commit will contain your name and email ID
(some imp git commands see image == gitim1)


then to view  use COMMAND "git log"
we will see this type of pic:
$ git log
commit f07ccf3974f8e0ec11ab982f452144dd95ba4824 (HEAD -> master)
Author: vaibhavkargeti <vaibhavkargeti@gmail.com>
Date:   Sun Apr 7 21:31:16 2019 +0530



== to get concise form of the  log 
COMMAND "git log --oneline"

== now , if we make some changes in file01.js file and then see its status it will shpow us h thi message :
$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

        modified:   file01.js


== git diff 
it will tell us what changes has happend to your file .


output like:

$ git diff
diff --git a/file01.js b/file01.js
index c9cd42f..2a5f311 100644
--- a/file01.js
+++ b/file01.js
@@ -1 +1,6 @@
-console.log('hello world')
\ No newline at end of file
+function greet(name){
+    console.log('hello' + name)
+}
+ greet('vaibhav')
+
+//console.log('hello world')
\ No newline at end of file



--here we see red lines removed ,, green lines added 
-- if we have already added something that will not show on "git diff"

TO CREATE A NEW BRANCH
"git checkout -b nameofbranch"
 (till 1:10 hrs)

























*/  
