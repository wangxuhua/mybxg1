<?php 
  // ���·�ɣ�����URL�Ĳ�ͬ��Ӧ��ͬ��ҳ�棩
  // header('content-type:text/html; charset=utf8');
  // include('./header.html');
  // echo '<div>��ҳ����</div>';
  // include('./footer.html');
  // include �ڵ�ǰPHPҳ���ڲ�Ƕ��һ����ҳ��
  // �����ܹ�ͨ��URL���ֳ��û�������ĸ�ҳ��
  // Ĭ��Ŀ¼����
  $dir = 'main';
  // Ĭ���ļ�����
  $filename = 'index';
  // ����URL��·��
  if(array_key_exists('PATH_INFO', $_SERVER)){
    // PATH_INFO���Դ���
    // ��ȡ����·��
    $path = $_SERVER['PATH_INFO']; // /main/index
    // ȥ����һ��б��
    $str = substr($path, 1); // main/index
    // �ַ����ָ��js��split��������
    $ret = explode('/', $str);
    if(count($ret) == 2){
      // ·��������
      $dir = $ret[0];// ����Ŀ¼
      $filename = $ret[1]; // �����ļ�����
    }else{
      // �������ȫ����ת����¼ҳ��
      $filename = 'login';
    }
  }
  // Ƕ����ҳ��
  include('./views/'.$dir.'/'.$filename.'.html');
?>