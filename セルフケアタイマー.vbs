If WScript.Arguments.Count Then
	With CreateObject("SAPI.SpVoice")
		.Rate=4
		.Speak WScript.Arguments(0)
	End With
Else
	Sub Speak(Text)
		CreateObject("WScript.Shell").Run WScript.ScriptName&" "&Text
	End Sub
	Notice="周囲の状況変化を確認しましょう"
	Do
		With CreateObject("SAPI.SpVoice")
			.Rate=4
			.Speak"ストレッチしましょう。"
		End With
		Speak"周囲の状況変化を確認しましょう。周囲の状況変化を確認しましょう。"
		MsgBox"ストレッチしましょう。"&vbLf&vbLf&"周囲の状況変化を確認しましょう。",&H30,Notice
		Do While MsgBox("周囲の状況変化を確認しましたか?",&H124,Notice)=vbNo
			Speak"周囲の状況変化を確認しましょう。"
			MsgBox"周囲の状況変化を確認しましょう。",&H10,Notice
		Loop
		If MsgBox("セルフケアタイマーを終了しますか?",&H124,"セルフケアタイマー")=vbYes Then Exit Do
		WScript.Sleep 300E3-(1E3*Timer+60E3)Mod 300E3
	Loop
	MsgBox"セルフケアタイマーを終了しました。",,"セルフケアタイマー"
End If