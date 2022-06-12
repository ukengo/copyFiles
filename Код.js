/* 
создание резервных копий "Управление", "Копия Управление", "Реестр оформлений", скрипта Portal Friedman
тригер настроен на 1 раз в день
*/

// общая функция
function copyFile_(fileId, folderId) {
  const file = DriveApp.getFileById(fileId);
  const folder = DriveApp.getFolderById(folderId);
  const date = Utilities.formatDate(new Date(), Session.getTimeZone(), 'yyyy-MM-dd - HH:mm:ss');
  file.makeCopy(`${file.getName()}.BACKUP - ${date}`, folder);
}



// создание резервных копий 
function copyFileReestAndUpravlenie() {
  
  const fileIdReestr = '1ewk6ahWyREzSUe985l3zm_LblKpdjXs6rAHd71hXzwQ';
  /*
  https://docs.google.com/spreadsheets/d/1ewk6ahWyREzSUe985l3zm_LblKpdjXs6rAHd71hXzwQ/edit#gid=743891930
  */
  
  const fileIdUpravlenie = '1xdJVfecdUCgtF_SHiC_IHbl8FP0Agl3slV_osyj6kxo';
  /*
  https://docs.google.com/spreadsheets/d/1xdJVfecdUCgtF_SHiC_IHbl8FP0Agl3slV_osyj6kxo/edit#gid=0
  */

  const fileIdUpravlBack = '1-pACMqs34-yHploR-wGWCU_KNTK6KT8CxsOwd32OzQY';
  /*
  https://docs.google.com/spreadsheets/d/1-pACMqs34-yHploR-wGWCU_KNTK6KT8CxsOwd32OzQY/edit#gid=0
  */

  const fileScriptReinginiring = '1stGuyk3nomGKclaMaDdPsMOCoRZnWmsMmMOH6QnISSkdiw3Igg-HzU1D';
  /*
  https://script.google.com/home/projects/1stGuyk3nomGKclaMaDdPsMOCoRZnWmsMmMOH6QnISSkdiw3Igg-HzU1D/edit
  */

  const folderId = '1RTIQb7KC698psvfdyKCJ4T_61WZLWI7W';
  /*
  https://drive.google.com/drive/folders/1RTIQb7KC698psvfdyKCJ4T_61WZLWI7W?usp=sharing
  */
  
  copyFile_(fileIdReestr, folderId);
  copyFile_(fileIdUpravlenie, folderId);
  copyFile_(fileIdUpravlBack, folderId);
  copyFile_(fileScriptReinginiring, folderId);
  const recipient = 'friedmanukraine@gmail.com';
  const subject = `отправлено скриптом Управление и Реестр`;
  const body = `отправлено скриптом Управление и Реестр;
  ${Utilities.formatDate(new Date(), Session.getTimeZone(), 'yyyy-MM-dd - HH:mm:ss')}`
  MailApp.sendEmail(recipient, subject, body) 
}

















