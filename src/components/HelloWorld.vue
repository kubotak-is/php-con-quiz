<template>
  <div>
    <div class="container">
      <label class="title">標準</label>
      <p>あいうえおかきくけこさしすせそ</p>
    </div>
    <div class="container dark">
      <label class="title">暗い</label>
      <p>漢字もいれられるよ</p>
    </div>
    <div class="container light">
      <label class="title">明るい</label>
      <p>まぁまぁ読めるかな？</p>
    </div>

    <button type="button" class="btn">Normal</button>
    <button type="button" class="btn primary">Primary</button>
    <button type="button" class="btn success">Success</button>
    <button type="button" class="btn warning">Warning</button>
    <button type="button" class="btn error">Error</button>

    <div class="progress">
      <div class="bar" style="width: 80%"></div>
      <div class="subtitle">Default</div>
    </div>
    <div class="progress primary">
      <div class="bar" style="width: 100%"></div>
      <div class="subtitle">primary</div>
    </div>
    <div class="progress success">
      <div class="bar" style="width: 40%"></div>
      <div class="subtitle">success</div>
    </div>
    <div class="progress warning">
      <div class="bar" style="width: 60%"></div>
      <div class="subtitle">warning</div>
    </div>
    <div class="progress error">
      <div class="bar" style="width: 20%"></div>
      <div class="subtitle">error</div>
    </div>

    <label>
      <input type="radio" name="test" value="small" checked />
      <span class="option">Yes <span class="click"></span> </span>
    </label>

    <div class="field">
      <label>Default</label> <input type="text" class="input" />
    </div>
    <div class="field is-inline">
      <label>With placeholder</label>
      <input type="text" class="input" placeholder="Jill Valentine" />
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>
