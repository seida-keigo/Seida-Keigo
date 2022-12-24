If WScript.Arguments.Count Then
	With CreateObject("SAPI.SpVoice")
		.Rate=3
		.Speak WScript.Arguments(0)
	End With
	WScript.Quit
End If
Sub Speak(Text)
	CreateObject("WScript.Shell").Run""""&WScript.ScriptName&""""""&Text&""""
End Sub
Do
	Speak"肘をどん角にしましょう。"
	MsgBox"肘を鈍角にしましょう。",&H1030,"PCから離れましょう"
	Speak"ストレッチしましょう。"
	MsgBox"ストレッチしましょう。",&H1030,"ストレッチしましょう"
	Do
		Speak"周囲の状況変化を確認しましたか?"
		If MsgBox("周囲の状況変化を確認しましたか?",&H1124,"セルフケアタイマー")=vbYes Then Exit Do
		Speak"周囲の状況変化を確認しましょう。"
		MsgBox"周囲の状況変化を確認しましょう。",&H1010,"周囲の状況変化を確認しましょう"
	Loop
	If MsgBox("セルフケアタイマーを続けますか?",&H1024,"セルフケアタイマー")=vbNo Then Exit Do
	WScript.Sleep 300E3-1E3*(60+Timer)Mod 300E3
Loop
MsgBox"セルフケアタイマーを終了しました。",&H1000,"セルフケアタイマー"

' 補足: 経験上、肘を鈍角にするまでPCから離れることで、過集中を防げます。