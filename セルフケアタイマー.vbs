If WScript.Arguments.Count Then
	With CreateObject("SAPI.SpVoice")
		.Rate=4
		.Speak WScript.Arguments(0)
	End With
Else
	Do
		CreateObject("WScript.Shell").Run"�Z���t�P�A�^�C�}�[.vbs �X�g���b�`���܂��傤�B���͂̏󋵕ω����m�F���܂�����?"
		If MsgBox("�X�g���b�`���܂��傤�B"&vbLf&vbLf&"���͂̏󋵕ω����m�F���܂�����?",308,"�Z���t�P�A�^�C�}�[")=7 Then
			Do
				CreateObject("WScript.Shell").Run"�Z���t�P�A�^�C�}�[.vbs ���͂̏󋵕ω����m�F���܂��傤�B"
				MsgBox"���͂̏󋵕ω����m�F���܂��傤�B",16,"�Z���t�P�A�^�C�}�["
				CreateObject("WScript.Shell").Run"�Z���t�P�A�^�C�}�[.vbs ���͂̏󋵕ω����m�F���܂�����?"
			Loop While MsgBox("���͂̏󋵕ω����m�F���܂�����?",308,"�Z���t�P�A�^�C�}�[")=7
		End If
		If MsgBox("�^�C�}�[���I�����܂���?",292,"�Z���t�P�A�^�C�}�[")=6 Then Exit Do
		WScript.Sleep 300E3-(1E3*Timer+60E3)Mod 300E3
	Loop
	MsgBox"�Z���t�P�A�^�C�}�[���I�����܂����B",,"�Z���t�P�A�^�C�}�["
End If