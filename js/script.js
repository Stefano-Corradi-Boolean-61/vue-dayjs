
// per inizializzare i plugin la sintassi è:
//dayjs.extend(window.dayjs_plugin_NOME_DEL_PLUGIN);
dayjs.extend(window.dayjs_plugin_customParseFormat);
dayjs.extend(window.dayjs_plugin_relativeTime);


dayjs.locale('it');

const app = new Vue({

  el: '#app',


  data : {
   adesso: dayjs().format('DD/MM/YYYY HH:mm:ss'),
   adesso2: dayjs().format('dddd D MMMM, YYYY'),
   tempoPassato: dayjs('1945-04-25').fromNow(),
   fineGuerraMondiale: dayjs('1945-04-25'),
   sept11: dayjs('2001-09-11'),
   confrontoDate: ''

  },
  mounted(){
    this.confrontoDate = this.sept11.diff(this.fineGuerraMondiale,'year');
  }
});

