If WScript.Arguments.Count Then
	With CreateObject("SAPI.SpVoice")
		.Rate=3
		.Speak WScript.Arguments(0)
	End With
	WScript.Quit
End If
Sub Speak(Text)
	CreateObject("WScript.Shell").Run WScript.ScriptName&" "&Text
End Sub
Do
	Speak"�I���ǂ�p�ɂ��܂��傤�B"
	MsgBox"�I��݊p�ɂ��܂��傤�B",&H30,"PC����ڂ𗣂��܂��傤"
	Speak"�X�g���b�`���܂��傤�B"
	MsgBox"�X�g���b�`���܂��傤�B",&H30,"�X�g���b�`���܂��傤"
	Do
		Speak"���͂̏󋵕ω����m�F���܂�����?"
		If MsgBox("���͂̏󋵕ω����m�F���܂�����?",&H124,"�Z���t�P�A�^�C�}�[")=vbYes Then Exit Do
		Speak"���͂̏󋵕ω����m�F���܂��傤�B"
		MsgBox"���͂̏󋵕ω����m�F���܂��傤�B",&H10,"���͂̏󋵕ω����m�F���܂��傤"
	Loop
	If MsgBox("�Z���t�P�A�^�C�}�[�𑱂��܂���?",&H24,"�Z���t�P�A�^�C�}�[")=vbNo Then Exit Do
	WScript.Sleep 300E3-1E3*(60+Timer)Mod 300E3
Loop
MsgBox"�Z���t�P�A�^�C�}�[���I�����܂����B",,"�Z���t�P�A�^�C�}�["

' �⑫: �o����A�I��݊p�ɂ���܂�PC����ڂ𗣂����ƂŁA�ߏW����h���܂��B