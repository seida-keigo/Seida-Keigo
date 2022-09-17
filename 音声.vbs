With CreateObject("SAPI.SpVoice")
	.Rate=4
	.Speak WScript.Arguments(0)
End With