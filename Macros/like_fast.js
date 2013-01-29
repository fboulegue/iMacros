//'This imacros script created by bestmacros
//'Find more here: http://www.bestmacros.com
var macro,rmacro;
macro = "CODE:";
macro +=  "VERSION BUILD=7401110 RECORDER=FX" + "\n"; 
macro +=  "SET !timeout 60" + "\n"; 
macro +=  "TAB T=1" + "\n"; 
macro +=  "prompt Please<sp>enter<sp>hash: !var1" + "\n"; 
macro +=  "url goto=http://statigr.am/viewer.php#/tag/{{!var1}}/list" + "\n"; 
macro +=  "TAG POS=1 TYPE=A ATTR=class:more" + "\n";
macro +=  "wait seconds=5" + "\n"; 
rmacro = iimPlay(macro);
	if (rmacro == -802){
	iimPlay("CODE:REFRESH",60);}
var like,rlike;
like = "CODE:";
like +=  "SET !timeout 60" + "\n"; 
like +=  "SET !timeout_step 2" + "\n"; 
like += "TAG POS=1 TYPE=A ATTR=class:likeAction<sp>like_picto_*" + "\n";
like +=  "wait seconds=2" + "\n";  


main:
{
var count=1;
   while (true)
   {  
   for (i=1; i <= 50; i++)
   {
	rlike = iimPlay(like);
	if(rlike==-921){
	iimPlay("code:TAG POS=1 TYPE=A ATTR=class:more");
	count=0;
	}
		count=count+1;
		if(count==20){
		iimPlay("code:TAG POS=1 TYPE=A ATTR=class:more");
		count=1;
		}	
		if (rlike == -101){ // abort script if user presses Stop button
		break main;}
	}
	if(count==20){
	iimPlay("code:TAG POS=1 TYPE=A ATTR=class:more");
	count=1;}
//	iimPlay("CODE:wait seconds=900");
	iimPlay("CODE:REFRESH",60);
	}
}
// 'This imacros script created by bestmacros
// 'Find more here: http://www.bestmacros.com
