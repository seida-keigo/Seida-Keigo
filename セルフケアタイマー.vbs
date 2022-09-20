If WScript.Arguments.Count Then
	With CreateObject("SAPI.SpVoice")
		.Rate=4
		.Speak WScript.Arguments(0)
	End With
	WScript.Quit
End If
Sub Speak(Text)
	CreateObject("WScript.Shell").Run WScript.ScriptName&" "&Text
End Sub
Notice="周囲の状況変化を確認しましょう"
Do
	Speak"ディスプレイから離れ、肘をどん角にしましょう。ストレッチしましょう。"
	MsgBox"ディスプレイから離れ、肘を鈍角にしましょう。"&vbLf&vbLf&"ストレッチしましょう。",&H30,Notice
	Do
		Speak"周囲の状況変化を確認しましたか?"
		If MsgBox("周囲の状況変化を確認しましたか?",&H124,Notice)=vbYes Then Exit Do
		Speak"周囲の状況変化を確認しましょう。"
		MsgBox"周囲の状況変化を確認しましょう。",&H10,Notice
	Loop
	If CreateObject("WScript.Shell").Popup("セルフケアタイマーを続けますか?",5,"セルフケアタイマー",&H24)=vbNo Then Exit Do
	WScript.Sleep 300E3-1E3*(60+Timer)Mod 300E3
Loop
MsgBox"セルフケアタイマーを終了しました。",,"セルフケアタイマー"