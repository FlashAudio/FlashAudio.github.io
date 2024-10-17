// 创建一个函数，用于生成HTML字符串
function createDiv(index) {
    // 使用模板字符串生成HTML，其中${index}会被替换为传入的参数
    return `
    <div class="columns is-centered" style="width: 90%;margin-left: auto;margin-right: auto;">
        <div class="column" style="width: 6%;">
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}_ser1"><strong style="font-size: larger;">Caption:</strong>
                </p>
            </div>
        </div>
        <div class="column" style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/PreliminaryAnalyses/${index}_gt.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}"><strong style="font-size: larger;">GT</strong>
                </p>
            </div>
        </div>
        <div class="column" style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/PreliminaryAnalyses/${index}_scale1.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}tgt"> <strong style="font-size: larger;">w/ anchored Scale 1</strong>
                </p>
            </div>
        </div>
        <div class="column" style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/PreliminaryAnalyses/${index}_scale2.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}ddim"> <strong style="font-size: larger;">w/ anchored Scale 2</strong>
                </p>
            </div>
        </div>
        <div class="column" style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/PreliminaryAnalyses/${index}_scale3.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}ddpm"> <strong style="font-size: larger;">w/ anchored Scale 3</strong>
                </p>
            </div>
        </div>
        <div class="column" style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/PreliminaryAnalyses/${index}_scale4.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}"> <strong style="font-size: larger;">w/ anchored Scale 4</strong>
                </p>
            </div>
        </div>
        <div class="column" style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/PreliminaryAnalyses/${index}_scale5.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}sdedit"> <strong style="font-size: larger;">w/ anchored Scale 5</strong>
                </p>
            </div>
        </div>
    </div>
    <div class="columns is-centered" style="width: 90%;margin-left: auto;margin-right: auto;">
        <div class="column" style="width: 6%;">
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}"><strong style="font-size: larger;"></strong>
                </p>
            </div>
        </div>
        <div class="column" style="width: 6%;">
            <div class="content">
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}"><strong style="font-size: larger;"></strong>
                </p>
            </div>
        </div>
        <div class="column" style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/PreliminaryAnalyses/${index}_wo_scale1.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}tgt"> <strong style="font-size: larger;">w/o anchored Scale 1</strong>
                </p>
            </div>
        </div>
        <div class="column" style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/PreliminaryAnalyses/${index}_wo_scale2.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}ddim"> <strong style="font-size: larger;">w/o anchored Scale 2</strong>
                </p>
            </div>
        </div>
        <div class="column" style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/PreliminaryAnalyses/${index}_wo_scale3.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}ddpm"> <strong style="font-size: larger;">w/o anchored Scale 3</strong>
                </p>
            </div>
        </div>
        <div class="column" style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/PreliminaryAnalyses/${index}_wo_scale4.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}"> <strong style="font-size: larger;">w/o anchored Scale 4</strong>
                </p>
            </div>
        </div>
        <div class="column" style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/PreliminaryAnalyses/${index}_wo_scale5.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}sdedit"> <strong style="font-size: larger;">w/o anchored Scale 5</strong>
                </p>
            </div>
        </div>
    </div>
    `;
}

// 创建一个函数，用于生成HTML字符串
function createRow(id) {
// 循环创建10个div
    rowid = "row"+id
    const rowElement = document.getElementById(rowid);
    for (let i = 0; i < 5; i++) {
        // 创建div
        const index = String(i);
        const div = createDiv(index);
        // 将div添加到页面中，这里假设你要添加到body中
        rowElement.innerHTML += div
        fetch('./demos/PreliminaryAnalyses/'+index+'_gt.txt')
        .then(response => response.text())
        .then(data => {
          // 使用正则表达式找出所有用[]包裹的文字
          const regex = /\[(.*?)\]/g;
          let match;
          const parts = [];
          let lastIndex = 0;
          while ((match = regex.exec(data)) !== null) {
            // 将匹配的文字用<strong style="font-size: larger;">标签包裹起来
            const marked = `<strong style="font-size: larger;"> [${match[1]}]</strong>`;
            // 将原文中的匹配文字替换为突出显示的文字
            parts.push(data.slice(lastIndex, match.index), marked);
            lastIndex = regex.lastIndex;
          }
          parts.push(data.slice(lastIndex));
          // 将处理后的文字显示在页面上
          document.getElementById(index+'_ser1').innerHTML += parts.join('');
        });
    }
}

// module.exports = { createRow };

// 创建一个函数，用于生成HTML字符串
function createDivMul(index) {
    // 使用模板字符串生成HTML，其中${index}会被替换为传入的参数
    return `
    <div class="columns is-centered" style="width: 90%;margin-left: auto;margin-right: auto;">
        <div class="column" style="width: 6%;">
            <div class="has-text-justified" >
                <p style="text-align: center;" id="${index}_ser2"><strong style="font-size: larger;">Caption:</strong>
                </p>
            </div>
        </div>
        <div class="column"  style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/Multistep/${index}_gt.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified" style="margin-top: -20px;">
                <p style="text-align: center;" ><strong style="font-size: larger;">GT</strong>
                </p>
            </div>
        </div>
        <div class="column"  style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/Multistep/${index}_FlashAudio.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified" style="margin-top: -20px;">
                <p style="text-align: center;" > <strong style="font-size: larger;">FlashAudio (4 steps)</strong>
                </p>
            </div>
        </div>
        <div class="column"  style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/Multistep/${index}_CFM.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified" style="margin-top: -20px;">
                <p style="text-align: center;" > <strong style="font-size: larger;">CFM (24 steps)</strong>
                </p>
            </div>
        </div>
        <div class="column"  style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/Multistep/${index}_Tango.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified" style="margin-top: -20px;">
                <p style="text-align: center;" > <strong style="font-size: larger;">Tango 2 (100 steps)</strong>
                </p>
            </div>
        </div>
        <div class="column"  style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/Multistep/${index}_MAA2.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified" style="margin-top: -25px;">
                <p style="text-align: center;" > <strong style="font-size: larger;">Make An Audio 2 (100 steps)</strong>
                </p>
            </div>
        </div>
        <div class="column"  style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/Multistep/${index}_AudioLDM2.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified" style="margin-top: -25px;">
                <p style="text-align: center;" > <strong style="font-size: larger;">AudioLDM 2 (100 steps)</strong>
                </p>
            </div>
        </div>
    </div>
    `;
}

// 创建一个函数，用于生成HTML字符串
function createRowMul(id) {
// 循环创建10个div
    rowid = "row"+id
    const rowElement = document.getElementById(rowid+'ser2');
    i = id
    // 创建div
    const index = String(i);
    const div = createDivMul(index);
    // 将div添加到页面中，这里假设你要添加到body中
    rowElement.innerHTML += div

    // 使用正则表达式找出所有用[]包裹的文字
    const regex = /\[(.*?)\]/g;
    let match;
    const parts = [];
    let lastIndex = 0;

    // 将处理后的文字显示在页面上
    // document.getElementById(index+'_ser2').innerHTML += parts.join('');
    fetch('./demos/Multistep/'+index+'_gt.txt')
    .then(response => response.text())
    .then(data => {
    // 使用正则表达式找出所有用[]包裹的文字
    const regex = /\[(.*?)\]/g;
    let match;
    const parts = [];
    let lastIndex = 0;
    while ((match = regex.exec(data)) !== null) {
        // 将匹配的文字用<strong style="font-size: larger;">标签包裹起来
        const marked = `<strong style="font-size: larger;">[${match[1]}]</strong>`;
        // 将原文中的匹配文字替换为突出显示的文字
        parts.push(data.slice(lastIndex, match.index), marked);
        lastIndex = regex.lastIndex;
    }
    parts.push(data.slice(lastIndex));
    // 将处理后的文字显示在页面上
    document.getElementById(index+'_ser2').innerHTML += parts.join('');

    });
}

function createDivFew(index) {
    // 使用模板字符串生成HTML，其中${index}会被替换为传入的参数
    return `
    <div class="columns is-centered" style="width: 90%;margin-left: auto;margin-right: auto;">
        <div class="column" style="width: 6%;">
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}_ser3"><strong style="font-size: larger;">Caption:</strong>
                </p>
            </div>
        </div>
        <div class="column"  style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/Fewstep/${index}_gt.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified" style="margin-top: -20px;">
                <p style="text-align: center;" id="${index}"><strong style="font-size: larger;">GT</strong>
                </p>
            </div>
        </div>
        <div class="column"  style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/Fewstep/${index}_FlashAudio.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified" style="margin-top: -20px;">
                <p style="text-align: center;" id="${index}"> <strong style="font-size: larger;">FlashAudio</strong>
                </p>
            </div>
        </div>
        <div class="column"  style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/Fewstep/${index}_AudioLCM.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified" style="margin-top: -20px;">
                <p style="text-align: center;" id="${index}"> <strong style="font-size: larger;">AudioLCM (2 steps)</strong>
                </p>
            </div>
        </div>
        <div class="column"  style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/Fewstep/${index}_SoundCTM.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified" style="margin-top: -20px;">
                <p style="text-align: center;" id="${index}"> <strong style="font-size: larger;">SoundCTM</strong>
                </p>
            </div>
        </div>
        <div class="column"  style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/Fewstep/${index}_CTTA.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified" style="margin-top: -20px;">
                <p style="text-align: center;" id="${index}"> <strong style="font-size: larger;">ConsistencyTTA</strong>
                </p>
            </div>
        </div>
    </div>
    `;
}

// 创建一个函数，用于生成HTML字符串
function createRowFew(id) {
// 循环创建10个div
    rowid = "row"+id
    const rowElement = document.getElementById(rowid+'ser3');
    i = id
    // 创建div
    const index = String(i);
    const div = createDivFew(index);
    // 将div添加到页面中，这里假设你要添加到body中
    rowElement.innerHTML += div
    fetch('./demos/Fewstep/'+index+'_gt.txt')
    .then(response => response.text())
    .then(data => {
        // 使用正则表达式找出所有用[]包裹的文字
        const regex = /\[(.*?)\]/g;
        let match;
        const parts = [];
        let lastIndex = 0;
        while ((match = regex.exec(data)) !== null) {
        // 将匹配的文字用<strong style="font-size: larger;">标签包裹起来
        const marked = `<strong style="font-size: larger;"> [${match[1]}]</strong>`;
        // 将原文中的匹配文字替换为突出显示的文字
        parts.push(data.slice(lastIndex, match.index), marked);
        lastIndex = regex.lastIndex;
        }
        parts.push(data.slice(lastIndex));
        // 将处理后的文字显示在页面上
        document.getElementById(index+'_ser3').innerHTML += parts.join('');
    });
}

function createDivdic2(index) {
    // 使用模板字符串生成HTML，其中${index}会被替换为传入的参数
    return `
    <div class="columns is-centered" style="width: 100%;" style="width: 80%;margin-left: auto;margin-right: auto;">
        <div class="column" style="width: 6%;">
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}_ser4"><strong style="font-size: larger;">Caption:</strong>
                </p>
            </div>
        </div>
        <div class="column" style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/AblationStudies/${index}_gt.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified" >
                <p style="text-align: center;" id="${index}"><strong style="font-size: larger;">GT</strong>
                </p>
            </div>
        </div>
        <div class="column" style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/AblationStudies/${index}_1_w_ln.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}"> <strong style="font-size: larger;">1-rf w/ LN</strong>
                </p>
            </div>
        </div>
        <div class="column" style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/AblationStudies/${index}_1_wo_Init.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}"> <strong style="font-size: larger;">1-rf w/o Init</strong>
                </p>
            </div>
        </div>
        <div class="column" style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/AblationStudies/${index}_1_w_Uniform.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}"> <strong style="font-size: larger;">1-rf w/ Uniform</strong>
                </p>
            </div>
        </div>
        <div class="column" style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/AblationStudies/${index}_1_wo_Immi.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}"> <strong style="font-size: larger;">1-rf w/o Immi</strong>
                </p>
            </div>
        </div>
        <div class="column" style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/AblationStudies/${index}_2_w_Mix-Exp.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}"> <strong style="font-size: larger;">2-rf w/ Mix-Exp</strong>
                </p>
            </div>
        </div>
        <div class="column" style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/AblationStudies/${index}_2_w_Uniform.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}"> <strong style="font-size: larger;">2-rf w/ Uniform</strong>
                </p>
            </div>
        </div>
        <div class="column" style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/AblationStudies/${index}_2_wo_Immi.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}"> <strong style="font-size: larger;">2-rf w/o Immi</strong>
                </p>
            </div>
        </div>
    </div>
    `;
}

// 创建一个函数，用于生成HTML字符串
function createRowdic2(id) {
// 循环创建10个div
    rowid = "row"+id
    const rowElement = document.getElementById(rowid+'ser4');
    i = id
    // 创建div
    const index = String(i);
    const div = createDivdic2(index);
    // 将div添加到页面中，这里假设你要添加到body中
    rowElement.innerHTML += div
    fetch('./demos/AblationStudies/'+index+'_gt.txt')
    .then(response => response.text())
    .then(data => {
        // 使用正则表达式找出所有用[]包裹的文字
        const regex = /\[(.*?)\]/g;
        let match;
        const parts = [];
        let lastIndex = 0;
        while ((match = regex.exec(data)) !== null) {
        // 将匹配的文字用<strong style="font-size: larger;">标签包裹起来
        const marked = `<strong style="font-size: larger;"> [${match[1]}]</strong>`;
        // 将原文中的匹配文字替换为突出显示的文字
        parts.push(data.slice(lastIndex, match.index), marked);
        lastIndex = regex.lastIndex;
        }
        parts.push(data.slice(lastIndex));
        // 将处理后的文字显示在页面上
        document.getElementById(index+'_ser4').innerHTML += parts.join('');
    });
}


function createDivFewCom(index) {
    // 使用模板字符串生成HTML，其中${index}会被替换为传入的参数
    return `
    <div class="columns is-centered" style="width: 90%;margin-left: auto;margin-right: auto;">
        <div class="column" style="width: 6%;">
            <div class="has-text-justified">
                <p style="text-align: center;" id="${index}_com"><strong style="font-size: larger;">Caption:</strong>
                </p>
            </div>
        </div>
        <div class="column"  style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/PreliminaryAnalyses2/${index}_gt.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified" style="margin-top: -20px;">
                <p style="text-align: center;" id="${index}"><strong style="font-size: larger;">GT</strong>
                </p>
            </div>
        </div>
        <div class="column"  style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/PreliminaryAnalyses2/${index}_2_rf_step1.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified" style="margin-top: -20px;">
                <p style="text-align: center;" id="${index}"> <strong style="font-size: larger;">2-RF step 1</strong>
                </p>
            </div>
        </div>
        <div class="column"  style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/PreliminaryAnalyses2/${index}_2_rf_step2.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified" style="margin-top: -20px;">
                <p style="text-align: center;" id="${index}"> <strong style="font-size: larger;">2-RF step 2</strong>
                </p>
            </div>
        </div>
        <div class="column"  style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/PreliminaryAnalyses2/${index}_2_rf_step4.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified" style="margin-top: -20px;">
                <p style="text-align: center;" id="${index}"> <strong style="font-size: larger;">2-RF step 4</strong>
                </p>
            </div>
        </div>
        <div class="column"  style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/PreliminaryAnalyses2/${index}_2_rf_step8.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified" style="margin-top: -20px;">
                <p style="text-align: center;" id="${index}"> <strong style="font-size: larger;">2-RF step 8</strong>
                </p>
            </div>
        </div>
        <div class="column"  style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/PreliminaryAnalyses2/${index}_2_rf_step16.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified" style="margin-top: -20px;">
                <p style="text-align: center;" id="${index}"> <strong style="font-size: larger;">2-RF step 16</strong>
                </p>
            </div>
        </div>
    </div>
    <div class="columns is-centered" style="width: 90%;margin-left: auto;margin-right: auto;">
        <div class="column" style="width: 6%;">
            <div class="has-text-justified">
                <p style="text-align: center;" ><strong style="font-size: larger;"> </strong>
                </p>
            </div>
        </div>
        <div class="column"  style="width: 6%;">
            <div class="has-text-justified" style="margin-top: -20px;">
                <p style="text-align: center;"><strong style="font-size: larger;"></strong>
                </p>
            </div>
        </div>
        <div class="column"  style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/PreliminaryAnalyses2/${index}_audiolcm_step1.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified" style="margin-top: -20px;">
                <p style="text-align: center;" id="${index}"> <strong style="font-size: larger;">AudioLCM step 1</strong>
                </p>
            </div>
        </div>
        <div class="column"  style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/PreliminaryAnalyses2/${index}_audiolcm_step2.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified" style="margin-top: -20px;">
                <p style="text-align: center;" id="${index}"> <strong style="font-size: larger;">AudioLCM step 2</strong>
                </p>
            </div>
        </div>
        <div class="column"  style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/PreliminaryAnalyses2/${index}_audiolcm_step4.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified" style="margin-top: -20px;">
                <p style="text-align: center;" id="${index}"> <strong style="font-size: larger;">AudioLCM step 4</strong>
                </p>
            </div>
        </div>
        <div class="column"  style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/PreliminaryAnalyses2/${index}_audiolcm_step8.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified" style="margin-top: -20px;">
                <p style="text-align: center;" id="${index}"> <strong style="font-size: larger;">AudioLCM step 8</strong>
                </p>
            </div>
        </div>
        <div class="column"  style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/PreliminaryAnalyses2/${index}_audiolcm_step16.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified" style="margin-top: -20px;">
                <p style="text-align: center;" id="${index}"> <strong style="font-size: larger;">AudioLCM step 16</strong>
                </p>
            </div>
        </div>
    </div>
    <div class="columns is-centered" style="width: 90%;margin-left: auto;margin-right: auto;">
        <div class="column" style="width: 6%;">
            <div class="has-text-justified">
                <p style="text-align: center;" ><strong style="font-size: larger;"> </strong>
                </p>
            </div>
        </div>
        <div class="column"  style="width: 6%;">
            <div class="has-text-justified" style="margin-top: -20px;">
                <p style="text-align: center;"><strong style="font-size: larger;"></strong>
                </p>
            </div>
        </div>
        <div class="column"  style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/PreliminaryAnalyses2/${index}_cfm_step1.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified" style="margin-top: -20px;">
                <p style="text-align: center;" id="${index}"> <strong style="font-size: larger;">CFM step 1</strong>
                </p>
            </div>
        </div>
        <div class="column"  style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/PreliminaryAnalyses2/${index}_cfm_step2.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified" style="margin-top: -20px;">
                <p style="text-align: center;" id="${index}"> <strong style="font-size: larger;">CFM step 2</strong>
                </p>
            </div>
        </div>
        <div class="column"  style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/PreliminaryAnalyses2/${index}_cfm_step4.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified" style="margin-top: -20px;">
                <p style="text-align: center;" id="${index}"> <strong style="font-size: larger;">CFM step 4</strong>
                </p>
            </div>
        </div>
        <div class="column"  style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/PreliminaryAnalyses2/${index}_cfm_step8.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified" style="margin-top: -20px;">
                <p style="text-align: center;" id="${index}"> <strong style="font-size: larger;">CFM step 8</strong>
                </p>
            </div>
        </div>
        <div class="column"  style="width: 6%;">
            <div class="content">
                <div class="tab_container">
                    <audio controls style="width: 100%;">
                        <source src="./demos/PreliminaryAnalyses2/${index}_cfm_step16.wav" type="audio/mpeg">
                        您的浏览器不支持 audio 元素。
                    </audio>
                </div>
            </div>
            <div class="has-text-justified" style="margin-top: -20px;">
                <p style="text-align: center;" id="${index}"> <strong style="font-size: larger;">CFM step 16</strong>
                </p>
            </div>
        </div>
    </div>
    `;
}

// 创建一个函数，用于生成HTML字符串
function createRowFewCom(id) {
// 循环创建10个div
    rowid = "row"+id
    const rowElement = document.getElementById(rowid+'com');
    i = id
    // 创建div
    const index = String(i);
    const div = createDivFewCom(index);
    // 将div添加到页面中，这里假设你要添加到body中
    rowElement.innerHTML += div
    fetch('./demos/PreliminaryAnalyses2/'+index+'_gt.txt')
    .then(response => response.text())
    .then(data => {
        // 使用正则表达式找出所有用[]包裹的文字
        const regex = /\[(.*?)\]/g;
        let match;
        const parts = [];
        let lastIndex = 0;
        while ((match = regex.exec(data)) !== null) {
        // 将匹配的文字用<strong style="font-size: larger;">标签包裹起来
        const marked = `<strong style="font-size: larger;"> [${match[1]}]</strong>`;
        // 将原文中的匹配文字替换为突出显示的文字
        parts.push(data.slice(lastIndex, match.index), marked);
        lastIndex = regex.lastIndex;
        }
        parts.push(data.slice(lastIndex));
        // 将处理后的文字显示在页面上
        document.getElementById(index+'_com').innerHTML += parts.join('');
    });
}