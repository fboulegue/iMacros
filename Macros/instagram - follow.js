//'This imacros script created by bestmacros
//'Find more here: http://www.bestmacros.com
var macro,rmacro;
macro = "CODE:";
macro +=  "VERSION BUILD=7401110 RECORDER=FX" + "\n"; 
macro +=  "SET !timeout 60" + "\n"; 
macro +=  "TAB T=1" + "\n"; 
macro +=  "prompt Please<sp>enter<sp>hash: !var1" + "\n"; 
macro +=  "url goto=http://statigr.am/viewer.php#/tag/{{!var1}}/list" + "\n"; 
rmacro = iimPlay(macro);
	if (rmacro == -802)
	{
	iimPlay("CODE:REFRESH",30);
	}

var follow,rfollow;
follow = "CODE:";
follow +=  "tab t=1" + "\n";  
follow +=  "SET !timeout 60" + "\n";   
follow +=  "TAG POS={{i}} TYPE=A ATTR=class:list-username-user extract=href" + "\n"; 
follow +=  "tab open" + "\n"; 
follow +=  "tab t=2" + "\n"; 
follow +=  "url goto={{!extract}}" + "\n";
follow +=  "SET !ERRORIGNORE YES" + "\n";  
follow +=  "TAG POS=1 TYPE=A ATTR=class:followAction<sp>user-relation-action" + "\n";
follow +=  "SET !ERRORIGNORE NO" + "\n";  
follow +=  "tab close" + "\n"; 

main:
{
   while (true)
   {  
   for (i=1; i <= 50; i++)
   {
	iimSet("i", i);
	rfollow = iimPlay(follow);
		if (rfollow == -802)
		{
		iimPlay("CODE:tab close");
		}
		if (rfollow == -101) // abort script if user presses Stop button
				{
				break main;
				}
	}
//	iimPlay("CODE:wait seconds=900");
	iimPlay("CODE:REFRESH",60);
	}
}
// 'This imacros script created by bestmacros
// 'Find more here: http://www.bestmacros.com
