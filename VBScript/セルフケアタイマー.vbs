If MsgBox("(5�̔{��-1)���̎����ɁA�u���͂̏�"&vbLf&"�ω����m�F���܂��傤�v�ƒʒm����܂��B",36,"�Z���t�P�A�^�C�}�[���N�����܂���?")=6 Then
	MsgBox"�Z���t�P�A�^�C�}�[���N�����܂����B",,"�Z���t�P�A�^�C�}�["
	Do
		WScript.Sleep 300000-(1000*Timer+60000)Mod 300000
		CreateObject("").Run"����.vbs ���͂̏󋵕ω����m�F���܂�����?"
		While MsgBox("���͂̏󋵕ω����m�F���܂�����?",308,"���͂̏󋵕ω����m�F���܂��傤")=7
			CreateObject("").Run"����.vbs ���͂̏󋵕ω����m�F���܂��傤�B"
			MsgBox"���͂̏󋵕ω����m�F���܂��傤�B",16,"���͂̏󋵕ω����m�F���܂��傤"
		Wend
	Loop While MsgBox("�Ăђʒm���܂���?",36,"�Z���t�P�A�^�C�}�[")=6
	MsgBox"�Z���t�P�A�^�C�}�[���~���܂����B",,"�Z���t�P�A�^�C�}�["
'Else
	'MsgBox"�Z���t�P�A�^�C�}�[���N�����܂���ł����B",,"�Z���t�P�A�^�C�}�["
End If