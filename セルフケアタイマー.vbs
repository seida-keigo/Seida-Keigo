If WScript.Arguments.Count Then
	With CreateObject("SAPI.SpVoice")
		.Rate=4
		.Speak WScript.Arguments(0)
	End With
Else
	Function Speak(Text)
		CreateObject("WScript.Shell").Run WScript.ScriptName&" "&Text
		Speak=Text
	End Function
	Notice="���͂̏󋵕ω����m�F���܂��傤"
	Do
		With CreateObject("SAPI.SpVoice")
			.Rate=4
			.Speak"�X�g���b�`���܂��傤�B"
		End With
		MsgBox"�X�g���b�`���܂��傤�B"&vbLf&vbLf&Speak("���͂̏󋵕ω����m�F���܂��傤�B"),&H30,Notice
		Do While MsgBox("���͂̏󋵕ω����m�F���܂�����?",&H124,Notice)=vbNo
			MsgBox Speak("���͂̏󋵕ω����m�F���܂��傤�B"),&H10,Notice
		Loop
		If MsgBox("�Z���t�P�A�^�C�}�[���I�����܂���?",&H124,"�Z���t�P�A�^�C�}�[")=vbYes Then Exit Do
		WScript.Sleep 300E3-(1E3*Timer+60E3)Mod 300E3
	Loop
	MsgBox"�Z���t�P�A�^�C�}�[���I�����܂����B",,"�Z���t�P�A�^�C�}�["
End If