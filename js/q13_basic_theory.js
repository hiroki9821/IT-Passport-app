export const q13_basic_theory = [
  {
    question: "コンピュータの2進数で表現される最小単位はどれか？",
    choices: [
      "ビット",
      "バイト",
      "ワード",
      "レコード"
    ],
    answer: "ビット",
    explanation: "ビットは0または1で表される情報の最小単位です。"
  },
  {
    question: "1バイトは何ビットか？",
    choices: [
      "8ビット",
      "2ビット",
      "16ビット",
      "4ビット"
    ],
    answer: "8ビット",
    explanation: "1バイトは8ビットで構成されます。"
  },
  {
    question: "コンピュータの記憶容量を表す単位で最も小さいものはどれか？",
    choices: [
      "ビット",
      "バイト",
      "キロバイト",
      "メガバイト"
    ],
    answer: "ビット",
    explanation: "ビットは情報量を表す最小の単位です。"
  },
  {
    question: "16進数の「A」は10進数でいくつか？",
    choices: [
      "10",
      "11",
      "12",
      "16"
    ],
    answer: "10",
    explanation: "16進数Aは10進数で10です。"
  },
  {
    question: "アナログ信号とデジタル信号の違いはどれか？",
    choices: [
      "アナログ信号は連続値、デジタル信号は離散値で表現される",
      "アナログ信号は2進数のみ、デジタル信号は10進数のみ",
      "アナログ信号はデータを圧縮する",
      "デジタル信号は音声しか表現できない"
    ],
    answer: "アナログ信号は連続値、デジタル信号は離散値で表現される",
    explanation: "アナログ＝連続、デジタル＝0/1などの離散値です。"
  },
  {
    question: "コンピュータで音声や画像を扱う際に必要となる処理はどれか？",
    choices: [
      "アナログ-デジタル変換",
      "圧縮のみ",
      "暗号化のみ",
      "2進数-16進数変換のみ"
    ],
    answer: "アナログ-デジタル変換",
    explanation: "音声・画像などアナログ情報はAD変換でデジタルにします。"
  },
  {
    question: "CPUの主な役割はどれか？",
    choices: [
      "演算と制御",
      "主記憶の増設",
      "電源供給",
      "外部記憶の管理"
    ],
    answer: "演算と制御",
    explanation: "CPUは計算や命令の制御を行います。"
  },
  {
    question: "主記憶装置（メインメモリ）の役割はどれか？",
    choices: [
      "プログラムやデータを一時的に記憶する",
      "電源供給を行う",
      "演算処理を担当する",
      "画像処理だけを行う"
    ],
    answer: "プログラムやデータを一時的に記憶する",
    explanation: "主記憶は実行中プログラムやデータの一時保存場所です。"
  },
  {
    question: "RAMの特徴はどれか？",
    choices: [
      "電源を切ると内容が消える",
      "内容が保存され続ける",
      "読み取り専用で書き込めない",
      "データを圧縮する"
    ],
    answer: "電源を切ると内容が消える",
    explanation: "RAM（揮発性）は電源OFFで内容消失します。"
  },
  {
    question: "ROMの特徴はどれか？",
    choices: [
      "電源を切っても内容が消えない",
      "書き込みが自由にできる",
      "記憶内容が自動的に消去される",
      "プログラムを実行できない"
    ],
    answer: "電源を切っても内容が消えない",
    explanation: "ROM（不揮発性）は内容が保持されます。"
  },
  {
    question: "コンピュータの5大装置に含まれないものはどれか？",
    choices: [
      "通信装置",
      "演算装置",
      "制御装置",
      "入力装置"
    ],
    answer: "通信装置",
    explanation: "5大装置は入力・出力・記憶・演算・制御です。"
  },
  {
    question: "クロック周波数が高いほど期待できるCPU性能はどれか？",
    choices: [
      "処理速度が速い",
      "電源消費が減る",
      "記憶容量が増える",
      "ネットワーク速度が上がる"
    ],
    answer: "処理速度が速い",
    explanation: "クロック周波数はCPU処理速度を表します。"
  },
  {
    question: "SSDとHDDの違いとして正しいものはどれか？",
    choices: [
      "SSDは半導体記憶素子、HDDは磁気ディスク",
      "SSDはCDを使用する",
      "HDDは画像専用である",
      "SSDはデータを圧縮しない"
    ],
    answer: "SSDは半導体記憶素子、HDDは磁気ディスク",
    explanation: "SSDはフラッシュメモリ/HDDは磁気記憶です。"
  },
  {
    question: "周辺装置に該当しないものはどれか？",
    choices: [
      "CPU",
      "プリンタ",
      "マウス",
      "ディスプレイ"
    ],
    answer: "CPU",
    explanation: "CPUは内部装置、周辺装置は入出力装置などです。"
  },
  {
    question: "ソフトウェアには大きく分けて何があるか？",
    choices: [
      "基本ソフトと応用ソフト",
      "外部ソフトと内部ソフト",
      "業務ソフトのみ",
      "画像ソフトと動画ソフト"
    ],
    answer: "基本ソフトと応用ソフト",
    explanation: "OSなどの基本ソフト、アプリなどの応用ソフトがあります。"
  },
  {
    question: "プログラム言語のうち、機械語に最も近いものはどれか？",
    choices: [
      "アセンブラ言語",
      "高水準言語",
      "日本語",
      "SQL"
    ],
    answer: "アセンブラ言語",
    explanation: "アセンブラはCPU命令に近い低水準言語です。"
  },
  {
    question: "2進数で1011は10進数でいくつか？",
    choices: [
      "11",
      "7",
      "13",
      "9"
    ],
    answer: "11",
    explanation: "1×8＋0×4＋1×2＋1＝11です。"
  },
  {
    question: "シフト演算で「1ビット右シフト」するとどうなるか？",
    choices: [
      "2で割ったのと同じ",
      "2で掛けたのと同じ",
      "4で割る",
      "10進数に変換する"
    ],
    answer: "2で割ったのと同じ",
    explanation: "右シフトは2で割るのと同じ効果です。"
  },
  {
    question: "プログラムの「アルゴリズム」とは何か？",
    choices: [
      "問題を解決するための手順や方法",
      "プログラムのエラー内容",
      "ハードウェアの仕様",
      "ソフトウェアのライセンス名"
    ],
    answer: "問題を解決するための手順や方法",
    explanation: "アルゴリズムは論理的な問題解決のための手順を指します。"
  },
  {
    question: "コンピュータの情報処理における“フローチャート”の目的はどれか？",
    choices: [
      "処理手順や流れを図で分かりやすく表現するため",
      "データの容量を増やすため",
      "ソフトウェアの著作権を守るため",
      "機械語に変換するため"
    ],
    answer: "処理手順や流れを図で分かりやすく表現するため",
    explanation: "フローチャートはプログラムや業務手順を視覚化する図です。"
  },
  {
    question: "条件分岐や繰り返し処理を記述する構造を何というか？",
    choices: [
      "制御構造",
      "データ構造",
      "ファイル構造",
      "プロセッサ構造"
    ],
    answer: "制御構造",
    explanation: "条件分岐(if)や繰り返し(for, while)は制御構造の一種です。"
  },
  {
    question: "プログラムのバグを発見し、修正する作業を何というか？",
    choices: [
      "デバッグ",
      "エンコード",
      "トランスレート",
      "アセンブル"
    ],
    answer: "デバッグ",
    explanation: "デバッグは不具合(バグ)の発見・修正作業です。"
  },
  {
    question: "スタックの特徴として正しいものはどれか？",
    choices: [
      "後入れ先出し（LIFO）である",
      "先入れ先出し（FIFO）である",
      "ランダムアクセス可能である",
      "永久にデータが消えない"
    ],
    answer: "後入れ先出し（LIFO）である",
    explanation: "スタックはLIFO（Last In, First Out）のデータ構造です。"
  },
  {
    question: "キューの特徴として正しいものはどれか？",
    choices: [
      "先入れ先出し（FIFO）である",
      "後入れ先出し（LIFO）である",
      "記憶容量が無限である",
      "常に空である"
    ],
    answer: "先入れ先出し（FIFO）である",
    explanation: "キューはFIFO（First In, First Out）のデータ構造です。"
  },
  {
    question: "論理回路の「NOTゲート」が行う処理はどれか？",
    choices: [
      "入力の反転",
      "入力の合計を出す",
      "入力を二倍にする",
      "入力を記憶する"
    ],
    answer: "入力の反転",
    explanation: "NOTゲートは0を1に、1を0に反転する回路です。"
  },
  {
    question: "論理回路の「ANDゲート」が出力1を出す条件はどれか？",
    choices: [
      "すべての入力が1のとき",
      "すべての入力が0のとき",
      "いずれかの入力が1のとき",
      "入力が交互のとき"
    ],
    answer: "すべての入力が1のとき",
    explanation: "ANDはすべて1で1を出力します。"
  },
  {
    question: "論理回路の「ORゲート」が出力1を出す条件はどれか？",
    choices: [
      "いずれかの入力が1のとき",
      "すべての入力が0のとき",
      "すべての入力が1のとき",
      "入力が交互のとき"
    ],
    answer: "いずれかの入力が1のとき",
    explanation: "ORはどちらかが1なら1になります。"
  },
  {
    question: "コンピュータの記憶装置で、不揮発性記憶装置はどれか？",
    choices: [
      "フラッシュメモリ",
      "RAM",
      "レジスタ",
      "キャッシュメモリ"
    ],
    answer: "フラッシュメモリ",
    explanation: "フラッシュメモリは電源OFFでも内容が消えません（不揮発性）。"
  },
  {
    question: "データベースにおいて、1件のデータの集合（例：1人分の氏名・住所など）を何と呼ぶか？",
    choices: [
      "レコード",
      "フィールド",
      "ファイル",
      "エンティティ"
    ],
    answer: "レコード",
    explanation: "レコードはフィールドの集まりで、1件の情報単位です。"
  },
  {
    question: "システム開発における「ウォーターフォールモデル」の特徴はどれか？",
    choices: [
      "上流から下流に工程が一方向に進む",
      "繰り返し開発する",
      "設計と実装が同時進行",
      "プロトタイプを多用する"
    ],
    answer: "上流から下流に工程が一方向に進む",
    explanation: "ウォーターフォールは工程を順次進める開発モデルです。"
  },
  {
    question: "システム開発で、設計・実装・テストを短期間で繰り返す手法を何というか？",
    choices: [
      "アジャイル開発",
      "ウォーターフォール開発",
      "トップダウン開発",
      "ビッグバン開発"
    ],
    answer: "アジャイル開発",
    explanation: "アジャイルは短いサイクルで設計〜テストを繰り返します。"
  },
  {
    question: "開発工程でソフトウェアの機能や構造を図で表す代表的な手法はどれか？",
    choices: [
      "UML",
      "HTML",
      "SQL",
      "JPEG"
    ],
    answer: "UML",
    explanation: "UMLは統一モデリング言語で、ソフトウェア構造を可視化します。"
  },
  {
    question: "ネットワークで使われる「LAN」の正式名称はどれか？",
    choices: [
      "Local Area Network",
      "Long Area Network",
      "Logical Area Network",
      "Low Area Network"
    ],
    answer: "Local Area Network",
    explanation: "LANは限定された範囲のネットワークです。"
  },
  {
    question: "ネットワーク機器のうち、データの宛先を判断して中継する役割を持つものはどれか？",
    choices: [
      "ルータ",
      "ハブ",
      "プリンタ",
      "マウス"
    ],
    answer: "ルータ",
    explanation: "ルータは異なるネットワーク間の中継・経路選択を担います。"
  },
  {
    question: "通信プロトコル「TCP/IP」で主に使われるIPアドレスはどのような役割か？",
    choices: [
      "ネットワーク上の機器を識別する番号",
      "データを圧縮する番号",
      "通信速度を決める番号",
      "データベースの識別番号"
    ],
    answer: "ネットワーク上の機器を識別する番号",
    explanation: "IPアドレスはネットワーク内の住所です。"
  },
  {
    question: "Webページの作成に使用するマークアップ言語はどれか？",
    choices: [
      "HTML",
      "C++",
      "Python",
      "Excel"
    ],
    answer: "HTML",
    explanation: "HTMLはWebページ作成の基本となる言語です。"
  },
  {
    question: "WebサーバとWebブラウザ間の通信プロトコルはどれか？",
    choices: [
      "HTTP",
      "FTP",
      "SMTP",
      "SSH"
    ],
    answer: "HTTP",
    explanation: "HTTPはWebの通信で標準的に使われます。"
  },
  {
    question: "インターネット上でファイルを送受信するプロトコルはどれか？",
    choices: [
      "FTP",
      "POP3",
      "SNMP",
      "ARP"
    ],
    answer: "FTP",
    explanation: "FTPはファイルの転送用プロトコルです。"
  },
  {
    question: "ネットワーク機器同士を物理的に接続するケーブルの例はどれか？",
    choices: [
      "LANケーブル",
      "USBメモリ",
      "SDカード",
      "DVD"
    ],
    answer: "LANケーブル",
    explanation: "LANケーブル（UTPケーブル等）はネットワークの物理接続に用います。"
  },
  {
    question: "パソコンなどで文字や画像を表示する出力装置はどれか？",
    choices: [
      "ディスプレイ",
      "キーボード",
      "ハードディスク",
      "マイク"
    ],
    answer: "ディスプレイ",
    explanation: "ディスプレイは映像や文字などを表示する出力装置です。"
  },
  {
    question: "パソコンの入力装置に分類されるものはどれか？",
    choices: [
      "マウス",
      "スピーカー",
      "モニター",
      "プリンター"
    ],
    answer: "マウス",
    explanation: "マウスは入力装置、スピーカーやモニターは出力装置です。"
  },
  {
    question: "パソコンにおいて一時的にデータやプログラムを保存する高速な記憶装置はどれか？",
    choices: [
      "RAM",
      "ROM",
      "SSD",
      "HDD"
    ],
    answer: "RAM",
    explanation: "RAM（メモリ）は作業中のデータを一時的に保存する高速な記憶装置です。"
  },
  {
    question: "パソコンの電源を切っても内容が消えない記憶装置はどれか？",
    choices: [
      "ROM",
      "RAM",
      "キャッシュメモリ",
      "レジスタ"
    ],
    answer: "ROM",
    explanation: "ROMは電源を切っても内容が消えません（不揮発性）。"
  },
  {
    question: "ストレージ装置のうち、SSDの特徴として適切なものはどれか？",
    choices: [
      "衝撃に強く、読み書きが高速",
      "回転ディスクを使う",
      "騒音が大きい",
      "長期間の保存が不可"
    ],
    answer: "衝撃に強く、読み書きが高速",
    explanation: "SSDは半導体メモリを用いたストレージで、高速・静音・耐衝撃性が特徴です。"
  },
  {
    question: "パソコンのデータを長期保存するために使われる装置はどれか？",
    choices: [
      "ハードディスク（HDD）",
      "レジスタ",
      "L1キャッシュ",
      "RAM"
    ],
    answer: "ハードディスク（HDD）",
    explanation: "HDDは長期的なデータ保存に適した記憶装置です。"
  },
  {
    question: "プログラムを機械語に変換するソフトウェアを何というか？",
    choices: [
      "コンパイラ",
      "エディタ",
      "ブラウザ",
      "ドライバ"
    ],
    answer: "コンパイラ",
    explanation: "コンパイラは高水準言語のプログラムを機械語へ変換します。"
  },
  {
    question: "プログラムを1行ずつ逐次的に解釈・実行するソフトウェアを何というか？",
    choices: [
      "インタプリタ",
      "コンパイラ",
      "OS",
      "ファームウェア"
    ],
    answer: "インタプリタ",
    explanation: "インタプリタはプログラムを1行ずつ解釈・実行します。"
  },
  {
    question: "OS（オペレーティングシステム）の主な役割として適切なものはどれか？",
    choices: [
      "ハードウェアとソフトウェアの仲介",
      "インターネットの閲覧",
      "画像の編集",
      "Webサイトの構築"
    ],
    answer: "ハードウェアとソフトウェアの仲介",
    explanation: "OSはハードとソフトの橋渡しや資源管理等を担う基本ソフトです。"
  },
  {
    question: "Windows、macOS、Linuxなどに共通する役割はどれか？",
    choices: [
      "OS（基本ソフト）",
      "表計算ソフト",
      "ワープロソフト",
      "CADソフト"
    ],
    answer: "OS（基本ソフト）",
    explanation: "WindowsやmacOS、Linuxはすべてオペレーティングシステムです。"
  },
  {
    question: "オープンソースソフトウェアの特徴はどれか？",
    choices: [
      "ソースコードが公開されている",
      "必ず有料である",
      "個人利用が禁止されている",
      "特定のメーカーしか使えない"
    ],
    answer: "ソースコードが公開されている",
    explanation: "オープンソースは誰でもソースを見たり改良できるのが特徴です。"
  },
  {
    question: "ソフトウェアのライセンスで“フリーソフト”の説明として適切なものはどれか？",
    choices: [
      "無料で利用できるソフトウェア",
      "販売会社が決まっているソフトウェア",
      "必ずオープンソースである",
      "ハードウェア専用のソフト"
    ],
    answer: "無料で利用できるソフトウェア",
    explanation: "フリーソフトは無料配布されているソフトウェアです。"
  },
  {
    question: "コンピュータウイルスに感染した場合のリスクはどれか？",
    choices: [
      "情報漏洩やデータ破壊の可能性がある",
      "パソコンの速度が無制限に速くなる",
      "必ずインターネット接続が切れる",
      "OSが自動的にアップグレードされる"
    ],
    answer: "情報漏洩やデータ破壊の可能性がある",
    explanation: "ウイルス感染は情報流出やデータ消失のリスクを伴います。"
  },
  {
    question: "個人情報を外部に漏洩させないために実施すべきことはどれか？",
    choices: [
      "パスワード管理の徹底",
      "誰でもPCを自由に使わせる",
      "不明なメールの添付ファイルを開く",
      "ネット上で個人情報を公開する"
    ],
    answer: "パスワード管理の徹底",
    explanation: "パスワード管理や権限設定で情報漏洩を防ぎます。"
  },
  {
    question: "コンピュータの時刻や設定情報などを保持する半導体記憶装置はどれか？",
    choices: [
      "CMOS",
      "RAM",
      "HDD",
      "CD-ROM"
    ],
    answer: "CMOS",
    explanation: "CMOSはBIOS設定や時計などを保存する不揮発性メモリです。"
  },
  {
    question: "BIOSの主な役割として正しいものはどれか？",
    choices: [
      "コンピュータ起動時にハードウェアを制御・初期化する",
      "ウイルスの感染を防ぐ",
      "文書を印刷する",
      "インターネット検索をする"
    ],
    answer: "コンピュータ起動時にハードウェアを制御・初期化する",
    explanation: "BIOSはPCの起動や初期動作を担います。"
  },
  {
    question: "サーバとクライアントの関係を正しく説明したものはどれか？",
    choices: [
      "サーバはサービスを提供し、クライアントは利用する側である",
      "クライアントがサービスを提供する",
      "どちらもデータ保存専用である",
      "サーバは必ず1台しか存在しない"
    ],
    answer: "サーバはサービスを提供し、クライアントは利用する側である",
    explanation: "サーバは提供側、クライアントは利用側の仕組みです。"
  },
  {
    question: "PCのマルチタスク機能とはどのような機能か？",
    choices: [
      "複数のアプリケーションを同時に動作させることができる",
      "パソコンを複数同時に購入できる機能",
      "ネットワーク接続が不要になる機能",
      "データを削除できなくする機能"
    ],
    answer: "複数のアプリケーションを同時に動作させることができる",
    explanation: "マルチタスクは複数の処理を並行して実行するOSの機能です。"
  },
  {
    question: "PCの“仮想メモリ”とは何か？",
    choices: [
      "物理メモリが不足した時、HDDやSSDの一部を一時的にメモリとして利用する仕組み",
      "データをクラウドに保存する仕組み",
      "CPUの性能を仮想化する技術",
      "USBメモリの仮想化"
    ],
    answer: "物理メモリが不足した時、HDDやSSDの一部を一時的にメモリとして利用する仕組み",
    explanation: "仮想メモリは物理メモリを補うためのOS機能です。"
  },
  {
    question: "データを暗号化して保存・送信する目的として正しいものはどれか？",
    choices: [
      "情報の漏洩や盗聴を防止するため",
      "データ容量を増やすため",
      "インターネット速度を上げるため",
      "パソコンの電源を節約するため"
    ],
    answer: "情報の漏洩や盗聴を防止するため",
    explanation: "暗号化はセキュリティ対策の一つです。"
  },
  {
    question: "LANで複数台のパソコンを物理的に結線して繋ぐネットワーク形態を何と呼ぶか？",
    choices: [
      "スター型",
      "バス型",
      "リング型",
      "メッシュ型"
    ],
    answer: "スター型",
    explanation: "ハブなどの中心装置を介して繋ぐ構成がスター型です。"
  },
  {
    question: "ネットワーク上で機器を識別するために用いる番号を何というか？",
    choices: [
      "IPアドレス",
      "MACアドレス",
      "ポート番号",
      "サブネットマスク"
    ],
    answer: "IPアドレス",
    explanation: "IPアドレスはネットワーク機器を識別するための番号です。"
  },
  {
    question: "LANで使われるイーサネットケーブルの端子形状で最も一般的なものはどれか？",
    choices: [
      "RJ-45",
      "USB Type-C",
      "HDMI",
      "D-sub"
    ],
    answer: "RJ-45",
    explanation: "イーサネットケーブルにはRJ-45コネクタが使われます。"
  },
  {
    question: "インターネットにおいて、ドメイン名とIPアドレスの対応を管理する仕組みはどれか？",
    choices: [
      "DNS",
      "DHCP",
      "HTTP",
      "FTP"
    ],
    answer: "DNS",
    explanation: "DNSはドメイン名とIPアドレスの対応を管理します。"
  },
  {
    question: "ネットワーク上で通信内容を盗聴されるリスクへの対策として適切なものはどれか？",
    choices: [
      "通信内容の暗号化",
      "通信速度を上げる",
      "パソコンの再起動",
      "ログイン回数の制限"
    ],
    answer: "通信内容の暗号化",
    explanation: "暗号化により盗聴リスクを低減できます。"
  },
  {
    question: "WebブラウザとWebサーバ間で安全な通信を実現するプロトコルはどれか？",
    choices: [
      "HTTPS",
      "FTP",
      "SMTP",
      "POP3"
    ],
    answer: "HTTPS",
    explanation: "HTTPSは暗号化されたWeb通信を実現します。"
  },
  {
    question: "インターネットでメールの送信に用いられるプロトコルはどれか？",
    choices: [
      "SMTP",
      "POP3",
      "IMAP",
      "FTP"
    ],
    answer: "SMTP",
    explanation: "SMTPはメール送信に用いられるプロトコルです。"
  },
  {
    question: "インターネットでメールの受信に用いられるプロトコルはどれか？",
    choices: [
      "POP3",
      "HTTP",
      "SNMP",
      "Telnet"
    ],
    answer: "POP3",
    explanation: "POP3はメールの受信プロトコルのひとつです。"
  },
  {
    question: "コンピュータネットワークにおいて、“ルータ”の役割として正しいものはどれか？",
    choices: [
      "異なるネットワーク同士を中継・接続する",
      "キーボード入力を管理する",
      "画像の編集をする",
      "データの圧縮を行う"
    ],
    answer: "異なるネットワーク同士を中継・接続する",
    explanation: "ルータはネットワーク間のデータ転送・接続を担います。"
  },
  {
    question: "ネットワーク機器のうち、LAN内で複数の機器を接続する装置はどれか？",
    choices: [
      "ハブ",
      "ルータ",
      "ファイアウォール",
      "プロキシサーバ"
    ],
    answer: "ハブ",
    explanation: "ハブはLAN内で機器を物理的に繋ぐ装置です。"
  },
  {
    question: "インターネット利用時に、外部からの不正アクセスを防止する機器はどれか？",
    choices: [
      "ファイアウォール",
      "ハブ",
      "プリンタ",
      "スキャナ"
    ],
    answer: "ファイアウォール",
    explanation: "ファイアウォールは外部からの不正侵入を防ぐ役割を持ちます。"
  },
  {
    question: "Webサイトを閲覧するために使うソフトウェアはどれか？",
    choices: [
      "Webブラウザ",
      "ファイアウォール",
      "データベース",
      "エディタ"
    ],
    answer: "Webブラウザ",
    explanation: "WebブラウザはWebページを閲覧するソフトウェアです。"
  },
  {
    question: "サーチエンジンで検索結果を上位に表示させる手法を何と呼ぶか？",
    choices: [
      "SEO",
      "SSL",
      "IoT",
      "DNS"
    ],
    answer: "SEO",
    explanation: "SEOは検索エンジン最適化の略称です。"
  },
  {
    question: "スマートフォンや家電など、様々な機器がネットワーク接続される仕組みを何というか？",
    choices: [
      "IoT",
      "AI",
      "VR",
      "HTML"
    ],
    answer: "IoT",
    explanation: "IoTは「Internet of Things」の略で“モノのインターネット”を意味します。"
  },
  {
    question: "ウェアラブルデバイスの例として適切なものはどれか？",
    choices: [
      "スマートウォッチ",
      "デスクトップPC",
      "プリンタ",
      "HDD"
    ],
    answer: "スマートウォッチ",
    explanation: "スマートウォッチは身に着けて使うウェアラブルデバイスです。"
  },
  {
    question: "AI（人工知能）の活用例として適切なものはどれか？",
    choices: [
      "自動運転車の制御",
      "CDプレイヤーの再生",
      "単純な目覚まし時計",
      "鉛筆削り機"
    ],
    answer: "自動運転車の制御",
    explanation: "AIは自動運転や画像認識など高度な判断・処理に活用されています。"
  },
  {
    question: "画像や音声をデジタルデータに変換する装置はどれか？",
    choices: [
      "A/Dコンバータ",
      "スピーカー",
      "ディスプレイ",
      "プリンタ"
    ],
    answer: "A/Dコンバータ",
    explanation: "A/Dコンバータはアナログデータをデジタルデータに変換します。"
  },
  {
    question: "コンピュータの基本単位で、1ビットで表せる情報量はどれか？",
    choices: [
      "0または1のどちらか",
      "2ビット",
      "8ビット",
      "1バイト"
    ],
    answer: "0または1のどちらか",
    explanation: "1ビットは0または1のどちらか一方を表します。"
  },
  {
    question: "8ビットで表現できる情報量は何通りか？",
    choices: [
      "256通り",
      "128通り",
      "8通り",
      "16通り"
    ],
    answer: "256通り",
    explanation: "2の8乗＝256で8ビットは256通り表せます。"
  },
  {
    question: "2進数の“1101”を10進数に変換したときの値はどれか？",
    choices: [
      "13",
      "10",
      "7",
      "5"
    ],
    answer: "13",
    explanation: "2進数1101は1×8＋1×4＋0×2＋1×1＝13です。"
  },
  {
    question: "1バイトは何ビットで構成されているか？",
    choices: [
      "8ビット",
      "4ビット",
      "16ビット",
      "32ビット"
    ],
    answer: "8ビット",
    explanation: "1バイト＝8ビットです。"
  },
  {
    question: "1KB（キロバイト）は何バイトか？",
    choices: [
      "1024バイト",
      "1000バイト",
      "512バイト",
      "256バイト"
    ],
    answer: "1024バイト",
    explanation: "1KBは1024バイトです（2の10乗）。"
  },
  {
    question: "“ハッシュ関数”の主な用途はどれか？",
    choices: [
      "データの要約や改ざん検出",
      "画像の表示",
      "通信速度の向上",
      "動画の圧縮"
    ],
    answer: "データの要約や改ざん検出",
    explanation: "ハッシュ関数は要約値を生成し、改ざん検出などに使います。"
  },
  {
    question: "プログラムやOSが突然停止して動作しなくなる現象を何と呼ぶか？",
    choices: [
      "フリーズ",
      "ログイン",
      "クラウド",
      "スリープ"
    ],
    answer: "フリーズ",
    explanation: "フリーズはシステムが停止し操作不能になる状態です。"
  },
  {
    question: "処理を繰り返し実行するプログラムの制御構造を何と呼ぶか？",
    choices: [
      "ループ",
      "分岐",
      "ジャンプ",
      "リターン"
    ],
    answer: "ループ",
    explanation: "ループは処理を繰り返し実行する制御構造です。"
  },
  {
    question: "“アルゴリズム”の説明として最も適切なものはどれか？",
    choices: [
      "問題解決のための手順や計算方法",
      "保存装置の容量",
      "OSの種類",
      "ネットワーク機器の名称"
    ],
    answer: "問題解決のための手順や計算方法",
    explanation: "アルゴリズムは処理手順や解決法のことです。"
  },
  {
    question: "情報を一定の規則で変換し、第三者に解読されないようにすることを何というか？",
    choices: [
      "暗号化",
      "復号",
      "圧縮",
      "分割"
    ],
    answer: "暗号化",
    explanation: "暗号化は情報を変換し、秘匿性を高めます。"
  },
  {
    question: "大量のデータを集めて分析し、価値ある情報を見つけ出す手法を何というか？",
    choices: [
      "ビッグデータ解析",
      "仮想化",
      "同期",
      "配線"
    ],
    answer: "ビッグデータ解析",
    explanation: "ビッグデータ解析は大量のデータを分析し有用な知見を得る手法です。"
  },
  {
    question: "IoTで“センサー”の主な役割はどれか？",
    choices: [
      "温度や動きなどの情報を検知・取得する",
      "ネットワークを監視する",
      "サーバを構築する",
      "データを圧縮する"
    ],
    answer: "温度や動きなどの情報を検知・取得する",
    explanation: "センサーは物理現象を検知しデータ化します。"
  },
  {
    question: "“ディープラーニング”が最も効果を発揮する分野はどれか？",
    choices: [
      "画像認識や音声認識",
      "電卓計算",
      "電波時計の調整",
      "USB機器の給電"
    ],
    answer: "画像認識や音声認識",
    explanation: "ディープラーニングは膨大なデータからパターンを認識するのに優れています。"
  },
  {
    question: "バーチャルリアリティ（VR）の説明として正しいものはどれか？",
    choices: [
      "コンピュータによって作られた仮想空間を体験できる技術",
      "情報の暗号化技術",
      "光ファイバ通信技術",
      "大容量記憶装置"
    ],
    answer: "コンピュータによって作られた仮想空間を体験できる技術",
    explanation: "VRは仮想空間への没入体験を提供します。"
  },
  {
    question: "現実世界の映像にデジタル情報を重ねて表示する技術はどれか？",
    choices: [
      "AR（拡張現実）",
      "VR（仮想現実）",
      "SR（代替現実）",
      "BI（ビジネスインテリジェンス）"
    ],
    answer: "AR（拡張現実）",
    explanation: "ARは現実の映像にデジタル情報を重ねる技術です。"
  },
  {
    question: "“クラウドサービス”の利点として適切なものはどれか？",
    choices: [
      "必要なときに必要な分だけリソースを利用できる",
      "サーバを自宅に設置する必要がある",
      "利用者が直接回線工事をする",
      "全て無料で使える"
    ],
    answer: "必要なときに必要な分だけリソースを利用できる",
    explanation: "クラウドサービスはスケーラビリティや柔軟性が特徴です。"
  },
  {
    question: "個人情報を守るために企業が実施すべき対策はどれか？",
    choices: [
      "アクセス権限の管理や暗号化",
      "情報の公開",
      "プリンタの増設",
      "紙媒体の全廃"
    ],
    answer: "アクセス権限の管理や暗号化",
    explanation: "個人情報保護にはアクセス制限や暗号化が有効です。"
  },
  {
    question: "“マルウェア”の一種で、利用者に気づかれず情報を盗むソフトはどれか？",
    choices: [
      "スパイウェア",
      "トロイの木馬",
      "ファイアウォール",
      "パスワード"
    ],
    answer: "スパイウェア",
    explanation: "スパイウェアは情報を盗むマルウェアの一種です。"
  },
  {
    question: "“フィッシング詐欺”の主な手口はどれか？",
    choices: [
      "偽のWebサイトで情報を盗む",
      "電子レンジの遠隔操作",
      "パスワードの自動生成",
      "ソフトウェアのアップデート"
    ],
    answer: "偽のWebサイトで情報を盗む",
    explanation: "フィッシング詐欺は偽サイトで情報を入力させ盗み取る手口です。"
  },
  {
    question: "PCやスマートフォンで定期的に実施すべきセキュリティ対策はどれか？",
    choices: [
      "OSやソフトのアップデート",
      "ディスプレイの買い替え",
      "データの印刷",
      "スマートフォンの買い替え"
    ],
    answer: "OSやソフトのアップデート",
    explanation: "アップデートにより脆弱性が修正され安全性が向上します。"
  },
  {
    question: "データ通信で“SSL/TLS”が果たす役割はどれか？",
    choices: [
      "通信の暗号化と認証",
      "データの圧縮",
      "回線速度の測定",
      "IPアドレスの自動割当"
    ],
    answer: "通信の暗号化と認証",
    explanation: "SSL/TLSはWeb等の通信を暗号化し、なりすまし防止にも役立ちます。"
  },
  {
    question: "パスワード設定時に推奨される方法はどれか？",
    choices: [
      "英数字や記号を組み合わせて複雑にする",
      "誕生日など単純なものにする",
      "同じパスワードを複数サイトで使う",
      "短いパスワードにする"
    ],
    answer: "英数字や記号を組み合わせて複雑にする",
    explanation: "パスワードは複雑で他者に推測されにくいものが安全です。"
  },
  {
    question: "“二要素認証”の例として適切なものはどれか？",
    choices: [
      "パスワードとワンタイムコードの併用",
      "パスワードだけ",
      "利用規約の確認だけ",
      "画面サイズの選択"
    ],
    answer: "パスワードとワンタイムコードの併用",
    explanation: "二要素認証は“知識＋所有物”など複数要素で認証します。"
  },
  {
    question: "コンピュータにウイルス対策ソフトを導入する主な目的はどれか？",
    choices: [
      "マルウェアの検出・駆除",
      "パソコンの速度向上",
      "画面の色調整",
      "プリンタの制御"
    ],
    answer: "マルウェアの検出・駆除",
    explanation: "ウイルス対策ソフトはマルウェアの発見・駆除を目的とします。"
  }
];
