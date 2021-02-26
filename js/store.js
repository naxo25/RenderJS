const state = {

  links: [

    { name:'RenderJs', to: '/', desc: 'Contador con RenderJs' },
    { name:'Linux', to: '/Linux', desc:'Comandos de linux que uso' },
    // { name:'JavaScript', to: '/JavaScript', desc:'desde api en heroku' },
    // { name:'Github', to: '/Github', desc: 'desde api en mi página con php' },
    { name:'Variables de entorno', to: '/Variables de entorno', desc: 'Configuración Variables_de_entorno' },
    { name:'Herramientas informaticas', to: '/Herramientas', desc: 'sitios, apis' },
    { name:'Sublime Text', to: '/Sublime', desc:'Configuración' },
    { name:'Mi Virtual Scroll', to: '/MiVirtual', desc:'mi version con Js' },

  ],

  Herramientas: [
    { linea: 'Sitios que generan jsons', class:'text-black title text-weight-bold' },
    { linea: 'https://jsonplaceholder.typicode.com', link:  'https://jsonplaceholder.typicode.com', class:'text-blue text-weight-bold' },
    { linea: 'https://randomuser.me/', link:  'https://randomuser.me/', class:'text-blue text-weight-bold' },
    { linea: 'Manipular imágenes', class:'text-black title text-weight-bold' },
    { linea: 'https://pixlr.com/es/e/', link:  'https://pixlr.com/es/e/', class:'text-blue text-weight-bold' },
  ],

  Linux: [

    { linea: 'Instalar mencoder', class:'text-black title text-weight-bold' },
    { linea: 'sudo apt-get install mencoder' },
    { linea: 'convertir los formatos a mp4, en mi caso uso una extension de chrome para grabar' },
    { linea: 'mencoder -ovc copy -oac pcm -o videos_juntados.mp4 video1.mp4 video2.mp4' },

    { linea: 'Instalar VMware', class:'text-black title text-weight-bold' },
    { linea: 'Descargar', link: 'https://www.vmware.com/es/products/workstation-player/workstation-player-evaluation.html', class:'text-blue text-weight-bold' },
    { linea: 'Posicionate en la carpeta de descomprención' },
    { linea: 'Dale permisos al archivo: chmod +x VMware-Player*' },
    { linea: 'sudo apt-get install gcc build-essential (Si no esta instalado)' },
    { linea: 'Instala el archivo: sudo ./VMware-Player*' },

    { linea: 'Instalar packetes debian, ej con chrome', class:'text-black title text-weight-bold' },
    { linea: 'Descargar chrome', link: 'https://www.google.com/intl/es-419/chrome/', class:'text-blue text-weight-bold' },
    { linea: 'sudo dpkg -i no del packete .deb que descargaste' },

    { linea: 'Instalar tar.gz', class:'text-black title text-weight-bold'  },
    { linea: 'Para descomprimir tar -xzvf ' },

    { linea: 'Programa para grabar', class:'text-black title text-weight-bold' },
    { linea: 'https://www.maartenbaert.be/simplescreenrecorder/' },

    { linea: 'Alias', class:'text-black title text-weight-bold' },
    { linea: 'Ejemplos' },
    { linea: 'alias sag="sudo apt-get"' },
    { linea: 'alias copyReadme="cp /home/nax/Documentos/Misc/readme.md ./"' },
    { linea: 'alias limpiar="sag autoremove && sag autoclean && sag clean"' },
    { linea: 'alias update="sag update && sag upgrade"' },
    { linea: 'alias naxchat="cd && cd Quasar/naxChat && quasar dev"' },
    { linea: 'alias studio="cd && cd Descargas/android-studio/bin && ./studio.sh"' },
    { linea: 'Para que sean permanentes edita el ~/.bashrc con algun editor, ej nano ~/.bashrc y copialos al final ' },

    { linea: 'Instalar ultima version de nodejs en linux ', class:'text-black title text-weight-bold' },
    { link: 'https://nodejs.org/es/', linea:'Descargar para linux', class:'text-black title text-weight-bold', class:'text-blue text-weight-bold' },
    { linea: 'Descomprime el archivo .tar.xz y renombra la carpeta a nodejs ' },
    { linea: 'En terminal instala los archivos' },
    { linea: 'sudo cp -r nodejs/{bin,include,lib,share} /usr/ ' },

    { linea: 'Ver Drivers ', class:'text-black title text-weight-bold' },
    { linea: 'lspci -v' },

  ],

  Github: [],

  Variables_de_entorno: [

    { linea: 'Configuración para Quasar', class:'text-black title text-weight-bold' },
    { linea: '1 descarga java' },
    { linea: '2 descarga grogle' },
    { linea: '2.3 ve a variables de entorno y agrega las rutas' },

    { linea: 'ANDROID_SDK_ROOT  --  C:\Users\{tu user}\AppData\Local\Android\Sdk' },
    { linea: 'JAVA_HOME     --  C:\Program Files\Java\jdk1.8.0_251' },

    { linea: 'Windows', class:'text-black title text-weight-bold' },
    { linea: 'agrega las variables al path del system' },
    { linea: ';%JAVA_HOME%\bin;%USERPROFILE%\AppData\Local\Android\Sdk\platforms; ' },
    { linea: '%USERPROFILE%\AppData\Local\Android\Sdk\platform-tools; ' },
    { linea: '%USERPROFILE%\AppData\Local\Android\Sdk\gradle-4.10.3\bin  ' },

    { linea: 'Linux', class:'text-black title text-weight-bold' },
    { linea: 'export ANDROID_HOME="$HOME/Android/Sdk"' },
    { linea: 'export JAVA_HOME="/home/nax/Descargas/jdk1.8.0_261"' },
    { linea: 'export ANDROID_TOOLS="$HOME/Android/Sdk/tools"' },
    { linea: 'export ANDROID_SDK_ROOT="$HOME/Android/Sdk"' },
    { linea: 'Agrega al PATH sudo nano /etc/environment' },
    { linea: 'PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin' },
    { linea: ':$JAVA_HOME/bin:$ANDROID_HOME/platforms:$ANDROID_HOME/platform-tools:$ANDROID_HOME/tools:$HOME/Descargas/gradle-4.10.3/bin"' },

  ],

  Sublime:[

    { linea: 'Comentar/descomentar código', class:'text-black title text-weight-bold' },
    { linea: 'Preferences -> Key Bindings' },
    { linea: '{ "keys": ["ctrl+7"], "command": "toggle_comment",' },
    { linea: '    "args": { "block": false }' },
    { linea: '}' },

    { linea: 'Plugins', class:'text-black title text-weight-bold' },
    { linea: 'Ctrl+ Shift + p' },
    { linea: 'seleccionamos Package Control: Install Package' },
    { linea: 'Escribimos emmet' },
    { linea: 'Ej: div>ul*2>li*5 -> Genera un div que contiene dos ul con cinco li' },

    { linea: 'Para abrir navegador', class:'text-black title text-weight-bold' },
    { linea: 'Preferences -> Package Settings -> Side Bar -> Settings User' },
    { linea: '{ "keys": ["shift+f6"],' },
    { linea: '"command": "side_bar_open_in_browser" ,' },
    { linea: '"args":{"paths":[], "type":"production", "browser":""}' },
    { linea: '}' },

  ]
}

const actions = {
  maximizar(){
    var el = document.documentElement;
    var rfs = // for newer Webkit and Firefox
    el.requestFullScreen
    || el.webkitRequestFullScreen
    || el.mozRequestFullScreen
    || el.msRequestFullScreen;
    if(typeof rfs!="undefined" && rfs){
        rfs.call(el);
    } else if(typeof window.ActiveXObject!="undefined"){
      // for Internet Explorer
      var wscript = new ActiveXObject("WScript.Shell");
      if (wscript!=null) {
          wscript.SendKeys("{F11}");
      }
    }
  }
}

/* Reactive Vars */
const [ home, setHome ] = setReactive(5,'Home')
const [ num, setNum ] = setReactive('L','Names')
