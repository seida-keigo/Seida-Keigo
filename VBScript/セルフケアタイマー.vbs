Do
	CreateObject("WScript.Shell").Run"����.vbs ���͂̏󋵕ω����m�F���܂�����?"
	While MsgBox("���͂̏󋵕ω����m�F���܂�����?",308,"���͂̏󋵕ω����m�F���܂��傤")=7
		CreateObject("WScript.Shell").Run"����.vbs ���͂̏󋵕ω����m�F���܂��傤�B"
		MsgBox"���͂̏󋵕ω����m�F���܂��傤�B",16,"���͂̏󋵕ω����m�F���܂��傤"
	Wend
	If MsgBox("�Ăђʒm���܂���?",36,"�Z���t�P�A�^�C�}�[")=7 Then Exit Do
	WScript.Sleep 300000-(1000*Timer+60000)Mod 300000
Loop
MsgBox"�Z���t�P�A�^�C�}�[���~���܂����B",,"�Z���t�P�A�^�C�}�["

'If MsgBox("(5�̔{��-1)���̎����ɁA�u���͂̏�"&vbLf&"�ω����m�F���܂��傤�v�ƒʒm����܂��B",36,"�Z���t�P�A�^�C�}�[���N�����܂���?")=6 Then