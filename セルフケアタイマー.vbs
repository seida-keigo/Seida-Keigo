If WScript.Arguments.Count Then
	With CreateObject("SAPI.SpVoice")
		.Rate=4
		.Speak WScript.Arguments(0)
	End With
Else
	Sub Speak(Text)
		CreateObject("WScript.Shell").Run WScript.ScriptName&" "&Text
	End Sub
	Title="�Z���t�P�A�^�C�}�["
	Do
		With CreateObject("SAPI.SpVoice")
			.Rate=4
			.Speak"�X�g���b�`���܂��傤�B"
		End With
		Speak"���͂̏󋵕ω����m�F���܂�����?"
		If MsgBox("�X�g���b�`���܂��傤�B"&vbLf&vbLf&"���͂̏󋵕ω����m�F���܂�����?",&H134,Title)=vbNo Then
			Do
				Speak"���͂̏󋵕ω����m�F���܂��傤�B"
				MsgBox"���͂̏󋵕ω����m�F���܂��傤�B",&H10,Title
				Speak"���͂̏󋵕ω����m�F���܂�����?"
			Loop While MsgBox("���͂̏󋵕ω����m�F���܂�����?",&H134,Title)=vbNo
		End If
		If MsgBox("�^�C�}�[���I�����܂���?",&H124,Title)=vbYes Then Exit Do
		WScript.Sleep 300E3-(1E3*Timer+60E3)Mod 300E3
	Loop
	MsgBox"�Z���t�P�A�^�C�}�[���I�����܂����B",,Title
End If