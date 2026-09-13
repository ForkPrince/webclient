<template>
    <div class="artist-separators-input">
        <div class="pillbox" @click="focusInput">
            <span
                v-for="item in items"
                :key="item"
                class="pill rounded-sm"
                :class="{ new: !saved.includes(item), locked: item === ',' }"
                :title="item === ',' ? $t('Settings.General.Separators.Locked') : `&quot;${item}&quot;`"
            >
                <b>
                    <template v-for="(seg, i) in segments(item)" :key="i">
                        <span v-if="seg.space" class="space">{{ '·'.repeat(seg.text.length) }}</span>
                        <template v-else>{{ seg.text }}</template>
                    </template>
                </b>
                <button v-if="item !== ','" type="button" class="remove" @click.stop="remove(item)"><PlusSvg /></button>
            </span>
            <input
                ref="inputEl"
                v-model="draft"
                type="text"
                :placeholder="$t('Settings.General.Separators.AddAnother')"
                @keydown="onKeydown"
                @blur="commit"
            />
        </div>
        <I18nT keypath="Settings.General.Separators.Hint" tag="p" class="hint">
            <template #enter><kbd>Enter</kbd></template>
            <template #comma><kbd>,</kbd></template>
        </I18nT>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { I18nT } from 'vue-i18n'

import PlusSvg from '@/assets/icons/plus.svg'

const props = defineProps<{
    default: string[]
    submit: (input: string) => void
}>()

const emit = defineEmits<{
    (e: 'dirty', value: boolean): void
}>()

const inputEl = ref<HTMLInputElement | null>(null)
const draft = ref('')
const items = ref<string[]>([])

// The comma is always a separator on the server, so it is shown but cannot be removed.
const withComma = (list: string[]) => [',', ...new Set(list.filter(s => s !== ',' && s.trim() !== ''))]

const saved = computed(() => withComma(props.default))
watch(saved, list => (items.value = [...list]), { immediate: true })

const sortedKey = (list: string[]) => [...list].sort().join(',')
const dirty = computed(() => sortedKey(items.value) !== sortedKey(saved.value))
watch(dirty, value => emit('dirty', value), { immediate: true })

const segments = (value: string) =>
    value
        .split(/( +)/)
        .filter(Boolean)
        .map(text => ({ text, space: text.trim() === '' }))

function focusInput() {
    inputEl.value?.focus()
}

function commit() {
    const value = draft.value
    draft.value = ''

    if (value.trim() === '' || value === ',') return
    if (!items.value.includes(value)) items.value.push(value)
}

function remove(item: string) {
    items.value = items.value.filter(x => x !== item)
}

function onKeydown(e: KeyboardEvent) {
    if (e.key === 'Enter' || e.key === ',') {
        e.preventDefault()
        commit()
        return
    }

    if (e.key === 'Backspace' && draft.value === '' && items.value.length > 1) {
        items.value = items.value.slice(0, -1)
    }
}

function save() {
    commit()
    props.submit(items.value.filter(x => x !== ',').join(','))
}

defineExpose({ save })
</script>

<style lang="scss">
.artist-separators-input {
    grid-column: 1 / -1;
    width: 100%;
    margin-top: $small;

    .pillbox {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: $small;
        padding: $medium;
        border: solid 1px $gray5;
        // background-color: $gray;
        cursor: text;
        border-radius: $medium;
    }

    .pill {
        display: inline-flex;
        align-items: center;
        gap: $small;
        padding: $smaller $smaller $smaller $medium;
        background-color: $gray5;
        border: solid 0.5px $gray4;
        color: $white;
        font-size: 1rem;
        white-space: pre;
        user-select: none;

        &.new {
            border-color: $blue;
            background-color: rgba($blue, 0.25);
        }

        &.locked {
            padding-right: $medium;
            opacity: 0.8;
        }

        .space {
            display: inline-block;
            padding: 0 $smaller;
            border-radius: $smaller;
            background-color: rgba($orange, 0.25);
            color: $orange;
            line-height: 1.2;
        }

        .remove {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            height: 1.25rem;
            aspect-ratio: 1;
            padding: 0;
            border-radius: $smaller;
            background-color: $gray4;
            color: $gray1;

            svg {
                height: 70%;
                width: 70%;
                fill: currentColor;
                transform: rotate(45deg);
            }

            &:hover {
                background-color: $gray3;
                color: $white;
            }
        }
    }

    input {
        flex: 1;
        min-width: 8rem;
        padding: $smaller 0;
        border: none;
        outline: none;
        background-color: transparent;
        color: $white;
        font-size: 1rem;
    }

    .hint {
        margin: $small 0;
        color: $gray1;
        font-size: 0.9rem;

        kbd {
            display: inline-block;
            padding: 0 $small;
            border: solid 1px $gray3;
            border-radius: $smaller;
            background-color: $gray5;
            font-family: inherit;
        }
    }
}
</style>
