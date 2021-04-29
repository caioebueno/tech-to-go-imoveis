import React from 'react'

import { ContainerTag, NameTag, Tag } from './styles'

export default function index({ title, value }) {
    return (
        <ContainerTag>
            <NameTag>{title}</NameTag>
            <Tag>{value}</Tag>
        </ContainerTag>
    )
}
