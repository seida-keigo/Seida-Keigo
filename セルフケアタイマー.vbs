If WScript.Arguments.Count Then
	With CreateObject("SAPI.SpVoice")
		.Rate=4
		.Speak WScript.Arguments(0)
	End With
	WScript.Quit
End If
Function Speak(Text)
	CreateObject("WScript.Shell").Run WScript.ScriptName&" "&Text
	Speak=Text
End Function
Notice="���͂̏󋵕ω����m�F���܂��傤"
Do
	MsgBox Speak("�f�B�X�v���C���痣��A�I��݊p�ɂ��܂��傤�B"&vbLf&vbLf&"�X�g���b�`���܂��傤�B"),&H30,Notice
	Do While MsgBox(Speak("���͂̏󋵕ω����m�F���܂�����?"),&H124,Notice)=vbNo
		MsgBox Speak("���͂̏󋵕ω����m�F���܂��傤�B"),&H10,Notice
	Loop
	If CreateObject("WScript.Shell").Popup("�Z���t�P�A�^�C�}�[�𑱂��܂���?",5,"�Z���t�P�A�^�C�}�[",&H24)=vbNo Then Exit Do
	WScript.Sleep 300E3-1E3*(60+Timer)Mod 300E3
Loop
MsgBox"�Z���t�P�A�^�C�}�[���I�����܂����B",,"�Z���t�P�A�^�C�}�["