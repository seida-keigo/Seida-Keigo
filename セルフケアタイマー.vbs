If WScript.Arguments.Count Then
	With CreateObject("SAPI.SpVoice")
		.Rate=4
		.Speak WScript.Arguments(0)
	End With
Else
	Function Alert(Text,Num)
		CreateObject("WScript.Shell").Run"�Z���t�P�A�^�C�}�[.vbs "&Text
		Alert=MsgBox(Text,Num,"�Z���t�P�A�^�C�}�[")
	End Function 
	Do
		Do
			If Alert("�X�g���b�`���܂��傤�B"&vbLf&vbLf&"���͂̏󋵕ω����m�F���܂�����?",308)=6 Then Exit Do
			Alert"���͂̏󋵕ω����m�F���܂��傤�B",16
		Loop While Alert("���͂̏󋵕ω����m�F���܂�����?",308)=7
		If MsgBox("�^�C�}�[���I�����܂���?",292,"�Z���t�P�A�^�C�}�[")=6 Then Exit Do
		WScript.Sleep 300E3-(1E3*Timer+60E3)Mod 300E3
	Loop
	MsgBox"�Z���t�P�A�^�C�}�[���I�����܂����B",,"�Z���t�P�A�^�C�}�["
End If