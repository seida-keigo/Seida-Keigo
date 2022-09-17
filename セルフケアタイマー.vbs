If WScript.Arguments.Count Then
	With CreateObject("SAPI.SpVoice")
		.Rate=4
		.Speak WScript.Arguments(0)
	End With
Else
	Sub Speak(Text)
		CreateObject("WScript.Shell").Run"セルフケアタイマー.vbs "&Text
	End Sub
	Title="セルフケアタイマー"
	Do
		With CreateObject("SAPI.SpVoice")
			.Rate=4
			.Speak"ストレッチしましょう。周囲の状況変化を確認しましたか?"
		End With
		If MsgBox("ストレッチしましょう。"&vbLf&vbLf&"周囲の状況変化を確認しましたか?",308,Title)=vbNo Then
			Do
				Speak"周囲の状況変化を確認しましょう。"
				MsgBox"周囲の状況変化を確認しましょう。",16,Title
				Speak"周囲の状況変化を確認しましたか?"
			Loop While MsgBox("周囲の状況変化を確認しましたか?",308,Title)=vbNo
		End If
		If MsgBox("タイマーを終了しますか?",292,Title)=vbYes Then Exit Do
		WScript.Sleep 300E3-(1E3*Timer+60E3)Mod 300E3
	Loop
	MsgBox"セルフケアタイマーを終了しました。",,Title
End If