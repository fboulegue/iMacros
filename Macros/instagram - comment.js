//'This imacros script created by bestmacros
//'Find more here: http://www.bestmacros.com
var macro,rmacro;
macro = "CODE:";
macro +=  "VERSION BUILD=7401110 RECORDER=FX" + "\n"; 
macro +=  "SET !timeout 100" + "\n"; 
macro +=  "TAB T=1" + "\n"; 
macro +=  "prompt Please<sp>enter<sp>hash: !var1" + "\n"; 
macro +=  "url goto=http://statigr.am/viewer.php#/tag/{{!var1}}/list" + "\n"; 
rmacro = iimPlay(macro);
	if (rmacro == -802)
	{
	iimPlay("CODE:REFRESH",60);
	}

var comment,rcomment,random;
comment = "CODE:";
comment += "SET !timeout 30" + "\n";
comment += "SET !DATASOURCE instagram.csv" + "\n";
comment += "SET !DATASOURCE_COLUMNS 10" + "\n";
comment += "SET !DATASOURCE_LINE {{random}}" + "\n";
comment += "TAG POS={{i}} TYPE=TEXTAREA ATTR=ID:comment-* CONTENT={{!col3}}" + "\n"; 
comment += "TAG POS={{i}} TYPE=A ATTR=ID:postComment-*" + "\n";
comment += "wait seconds=2" + "\n";


main:
{
   while (true)
   {  
   for (i=1; i <= 50; i++)
   {

	iimSet("i", i);
	iimSet("random", random=Math.floor(Math.random()*100 + 1));
	rcomment = iimPlay(comment);
		if (rcomment == -101) // abort script if user presses Stop button
		{
		break main;
		}
		if (rcomment == -802)
		{
		iimSet("i", i);
		iimSet("random", random);
		rcomment = iimPlay(comment);
		}
		if (rcomment == -101) // abort script if user presses Stop button
		{
		break main;
		}
	}
	iimPlay("CODE:wait seconds=900");
	iimPlay("CODE:REFRESH",60);
	}
}
// 'This imacros script created by bestmacros
// 'Find more here: http://www.bestmacros.com
