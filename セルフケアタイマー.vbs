If WScript.Arguments.Count Then
	With CreateObject("SAPI.SpVoice")
		.Rate=4
		.Speak WScript.Arguments(0)
	End With
Else
	Sub Speak(Text)
		CreateObject("WScript.Shell").Run"�Z���t�P�A�^�C�}�[.vbs "&Text
	End Sub
	Title="�Z���t�P�A�^�C�}�["
	Do
		With CreateObject("SAPI.SpVoice")
			.Rate=4
			.Speak"�X�g���b�`���܂��傤�B���͂̏󋵕ω����m�F���܂�����?"
		End With
		If MsgBox("�X�g���b�`���܂��傤�B"&vbLf&vbLf&"���͂̏󋵕ω����m�F���܂�����?",308,Title)=vbNo Then
			Do
				Speak"���͂̏󋵕ω����m�F���܂��傤�B"
				MsgBox"���͂̏󋵕ω����m�F���܂��傤�B",16,Title
				Speak"���͂̏󋵕ω����m�F���܂�����?"
			Loop While MsgBox("���͂̏󋵕ω����m�F���܂�����?",308,Title)=vbNo
		End If
		If MsgBox("�^�C�}�[���I�����܂���?",292,Title)=vbYes Then Exit Do
		WScript.Sleep 300E3-(1E3*Timer+60E3)Mod 300E3
	Loop
	MsgBox"�Z���t�P�A�^�C�}�[���I�����܂����B",,Title
End If