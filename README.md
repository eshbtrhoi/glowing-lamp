# glowing-lamp
JavaScript canvas 2d

## v1.5

* `imgObj`
    * onPointerの範囲を調整


## v1.4

* `charObj`
    * `hide`で引数に`false`を設定した場合、`Run`の値を`false`に設定するよう修正
* `imgObj`
    * `sizecalc`の`calc()`に%,@を使用した計算と、かっこの計算の修正
* `stageObj`
    * `onPointer`に渡す引数の`sizecalc`を使用する場合に@の計算ができない問題の修正


## v1.3

* `textObj`
    * `strokeWidth`のデフォルト値を`6`に変更


## v1.2

***注意: v1.2の`glowing_version`はv1.1に設定されています。バージョンを利用したプログラムの不具合を避けるためにv1.2の使用時は気を付けてください。***

* `imgObj`(`charObj`)
    * `charObj`の`x`,`y`で`calc()`を使って計算するとき、`@`を入力して`%`と同じ記法でキャラクターの`width`,`height`に対する百分率計算の機能を追加  
    (注: `x`を計算する場合は`width`を基準、`y`を計算する場合は`height`を基準に計算)
* `stageObj`
    * `pointCheck`にて`calc()`の計算が無い問題の修正
* `textObj`
    * `"プ"` 等の半濁点が上で切れる問題を修正
    * テスト用のconsoleコードが削除されていない問題の修正


## v1.1

* `textObj`
    * `size`の項目を追加
    * `changeSZ`の項目を追加
    * 文字レンダリングの修正  
    (例: `"꧅"`や`"﷽"`等の文字がレンダリングされるときの幅の調整)