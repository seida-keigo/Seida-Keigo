If WScript.Arguments.Count Then
	With CreateObject("SAPI.SpVoice")
		.Rate=4
		.Speak WScript.Arguments(0)
	End With
	WScript.Quit
End If
Sub Speak(Text)
	CreateObject("WScript.Shell").Run WScript.ScriptName&" "&Text
End Sub
Notice="���͂̏󋵕ω����m�F���܂��傤"
Do
	Speak"�f�B�X�v���C���痣��A�I���ǂ�p�ɂ��܂��傤�B�X�g���b�`���܂��傤�B"
	MsgBox"�f�B�X�v���C���痣��A�I��݊p�ɂ��܂��傤�B"&vbLf&vbLf&"�X�g���b�`���܂��傤�B",&H30,Notice
	Do
		Speak"���͂̏󋵕ω����m�F���܂�����?"
		If MsgBox("���͂̏󋵕ω����m�F���܂�����?",&H124,Notice)=vbYes Then Exit Do
		Speak"���͂̏󋵕ω����m�F���܂��傤�B"
		MsgBox"���͂̏󋵕ω����m�F���܂��傤�B",&H10,Notice
	Loop
	If CreateObject("WScript.Shell").Popup("�Z���t�P�A�^�C�}�[�𑱂��܂���?",5,"�Z���t�P�A�^�C�}�[",&H24)=vbNo Then Exit Do
	WScript.Sleep 300E3-1E3*(60+Timer)Mod 300E3
Loop
MsgBox"�Z���t�P�A�^�C�}�[���I�����܂����B",,"�Z���t�P�A�^�C�}�["