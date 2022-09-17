Do
	CreateObject("WScript.Shell").Run"音声.vbs 周囲の状況変化を確認しましたか?"
	While MsgBox("周囲の状況変化を確認しましたか?",308,"周囲の状況変化を確認しましょう")=7
		CreateObject("WScript.Shell").Run"音声.vbs 周囲の状況変化を確認しましょう。"
		MsgBox"周囲の状況変化を確認しましょう。",16,"周囲の状況変化を確認しましょう"
	Wend
	If MsgBox("再び通知しますか?",36,"セルフケアタイマー")=7 Then Exit Do
	WScript.Sleep 300000-(1000*Timer+60000)Mod 300000
Loop
MsgBox"セルフケアタイマーを停止しました。",,"セルフケアタイマー"

'If MsgBox("(5の倍数-1)分の時刻に、「周囲の状況"&vbLf&"変化を確認しましょう」と通知されます。",36,"セルフケアタイマーを起動しますか?")=6 Then