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
Function Popup(Prompt,Buttons,Title)
	Popup=CreateObject("WScript.Shell").Popup(Prompt,300-(1E3*(60+Timer)Mod 300E3)/1E3,Title,Buttons)
End Function
Do
	Speak"�I���ǂ�p�ɂ��܂��傤�B"
	Popup"�I��݊p�ɂ��܂��傤�B",&H30,"�I��݊p�ɂ��܂��傤"
	Speak"�X�g���b�`���܂��傤�B"
	Popup"�X�g���b�`���܂��傤�B",&H30,"�X�g���b�`���܂��傤"
	Do
		Speak"���͂̏󋵕ω����m�F���܂�����?"
		If Popup("���͂̏󋵕ω����m�F���܂�����?",&H124,"���͂̏󋵕ω����m�F���܂��傤")=vbYes Then Exit Do
		Speak"���͂̏󋵕ω����m�F���܂��傤�B"
		Popup"���͂̏󋵕ω����m�F���܂��傤�B",&H10,"���͂̏󋵕ω����m�F���܂��傤"
	Loop
	If Popup("�Z���t�P�A�^�C�}�[�𑱂��܂���?",&H24,"�Z���t�P�A�^�C�}�[")=vbNo Then Exit Do
	WScript.Sleep 300E3-1E3*(60+Timer)Mod 300E3
Loop
MsgBox"�Z���t�P�A�^�C�}�[���I�����܂����B",,"�Z���t�P�A�^�C�}�["

' �⑫: �o����A�I��݊p�ɂ���܂�PC�̉�ʂ���ڂ𗣂����ƂŁA�ߏW����h���܂��B