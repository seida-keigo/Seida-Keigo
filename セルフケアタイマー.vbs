If WScript.Arguments.Count Then
	With CreateObject("SAPI.SpVoice")
		.Rate=3
		.Speak WScript.Arguments(0)
	End With
	WScript.Quit
End If
Sub Speak(Text)
	CreateObject("WScript.Shell").Run""""&WScript.ScriptName&""""""&Text&""""
End Sub
Do
	Speak"�I���ǂ�p�ɂ��܂��傤�B"
	MsgBox"�I��݊p�ɂ��܂��傤�B",&H1030,"PC���痣��܂��傤"
	' �⑫: �o����A�I��݊p�ɂ���܂�PC���痣��邱�ƂŁA�ߏW����h���܂��B
	Speak"�X�g���b�`���܂��傤�B"
	MsgBox"�X�g���b�`���܂��傤�B",&H1030,"�X�g���b�`���܂��傤"
	Do
		Speak"���͂̏󋵕ω����m�F���܂�����?"
		If MsgBox("���͂̏󋵕ω����m�F���܂�����?",&H1124,"�Z���t�P�A�^�C�}�[")=vbYes Then
			Exit Do
		End If
		Speak"���͂̏󋵕ω����m�F���܂��傤�B"
		MsgBox"���͂̏󋵕ω����m�F���܂��傤�B",&H1010,"���͂̏󋵕ω����m�F���܂��傤"
	Loop
	If MsgBox("�Z���t�P�A�^�C�}�[�𑱂��܂���?",&H1024,"�Z���t�P�A�^�C�}�[")=vbNo Then
		Exit Do
	End If
	WScript.Sleep 300E3-1E3*(60+Timer)Mod 300E3
Loop
MsgBox"�Z���t�P�A�^�C�}�[���I�����܂����B",&H1000,"�Z���t�P�A�^�C�}�["