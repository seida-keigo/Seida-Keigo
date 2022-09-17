If WScript.Arguments.Count Then
	With CreateObject("SAPI.SpVoice")
		.Rate=4
		.Speak WScript.Arguments(0)
	End With
Else
	Function Alert(Text,Num)
		CreateObject("WScript.Shell").Run"セルフケアタイマー.vbs "&Text
		Alert=MsgBox(Text,Num,"セルフケアタイマー")
	End Function 
	Do
		Do
			If Alert("ストレッチしましょう。"&vbLf&vbLf&"周囲の状況変化を確認しましたか?",308)=6 Then Exit Do
			Alert"周囲の状況変化を確認しましょう。",16
		Loop While Alert("周囲の状況変化を確認しましたか?",308)=7
		If MsgBox("タイマーを終了しますか?",292,"セルフケアタイマー")=6 Then Exit Do
		WScript.Sleep 300E3-(1E3*Timer+60E3)Mod 300E3
	Loop
	MsgBox"セルフケアタイマーを終了しました。",,"セルフケアタイマー"
End If