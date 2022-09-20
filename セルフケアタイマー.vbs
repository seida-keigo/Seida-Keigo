If WScript.Arguments.Count Then
	With CreateObject("SAPI.SpVoice")
		.Rate=3
		.Speak WScript.Arguments(0)
	End With
	WScript.Quit
End If
Sub Speak(Text)
	CreateObject("WScript.Shell").Run WScript.ScriptName&" "&Text
End Sub
Function Popup(Prompt,Buttons,Title)
	Popup=CreateObject("WScript.Shell").Popup(Prompt,300-(1E3*(60+Timer)Mod 300E3)/1E3,Title,Buttons)
End Function
Do
	Speak"肘をどん角にしましょう。"
	Popup"肘を鈍角にしましょう。",&H30,"肘を鈍角にしましょう"
	Speak"ストレッチしましょう。"
	Popup"ストレッチしましょう。",&H30,"ストレッチしましょう"
	Do
		Speak"周囲の状況変化を確認しましたか?"
		If Popup("周囲の状況変化を確認しましたか?",&H124,"周囲の状況変化を確認しましょう")=vbYes Then Exit Do
		Speak"周囲の状況変化を確認しましょう。"
		Popup"周囲の状況変化を確認しましょう。",&H10,"周囲の状況変化を確認しましょう"
	Loop
	If Popup("セルフケアタイマーを続けますか?",&H24,"セルフケアタイマー")=vbNo Then Exit Do
	WScript.Sleep 300E3-1E3*(60+Timer)Mod 300E3
Loop
MsgBox"セルフケアタイマーを終了しました。",,"セルフケアタイマー"

' 補足: 経験上、肘を鈍角にするまでPCの画面から目を離すことで、過集中を防げます。